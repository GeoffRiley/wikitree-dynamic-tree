/*
 * WikiTreeAPI.js
 *
 * Provide a "Person" object where data is gathered from the WikiTree API.
 * We use the WikiTree API action "getPerson" to retrieve the profile data and then store it in object fields.
 *
 */

/* jshint strict: true, esversion: 11 */
"use strict";

// Set localTesting to true if you run this from your desktop. This would require that you have installed a browser
// extension to fiddle with CORS permissions, like one of these for Chrome:
//     https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc
//     https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
const localTesting = false;

// Put our functions into a "WikiTreeAPI" namespace.
var WikiTreeAPI = WikiTreeAPI || {};
window.WikiTreeAPI = WikiTreeAPI;

const dateTokenCache = {};

/**
 * Serializes WikiTree fuzzy date using formatting string
 * @param  {object}  person Person object received from WikiTree API
 * @param  {string}  fieldName Name of the fuzzy date to be serialized, possible values: `BirthDate`, `DeathDate`,
 *                      `marriage_date` (if 'person' is a 'Spouse')
 * @param  {object}  options object containing following options
 *                      * {string} [formatString="MMM DD, YYYY"]
 *                      * {boolean} [withCertainty=true]
 * @return {string} Serialized date
 */
window.wtDate = function (person, fieldName, options = {}) {
    const MONTHS = [
        // just to keep it more compact and not too long (more than 120 characters)
        ...["January", "February", "March", "April", "May", "June"],
        ...["July", "August", "September", "October", "November", "December"],
    ];

    const CERTAINTY_MAP = { guess: "about", before: "before", after: "after" }; // '' & 'certain' will produce ''

    const DEFAULT_OPTIONS = { formatString: "MMM DD, YYYY", withCertainty: true };
    options = { ...DEFAULT_OPTIONS, ...options };

    function tokenize(formatString) {
        if (dateTokenCache[formatString]) {
            return dateTokenCache[formatString];
        }

        let prev = null;
        let tokens = [];

        for (let letter of formatString) {
            if (prev !== letter && ("DMY".includes(prev) || "DMY".includes(letter))) {
                // prev and letter are different and one of them is one on D|M|Y
                tokens[tokens.length] = letter;
            } else if (
                (!"DMY".includes(prev) && !"DMY".includes(letter)) || // both prev and letter are not one of D|M|Y
                (prev === letter && "DMY".includes(letter)) || // prev and letter are same and one of D|M|Y
                (!"DMY".includes(letter) && (prev !== letter || !"DMY".includes(prev)))
            ) {
                tokens[tokens.length - 1] += letter;
            }
            prev = letter;
        }

        dateTokenCache[formatString] = tokens;
        return tokens;
    }

    let tokens = tokenize(options.formatString);

    let prop = person?.[fieldName];

    if (!prop || prop === "0000-00-00") {
        switch (fieldName) {
            case "BirthDate":
                return person?.["BirthDateDecade"];
            case "DeathDate":
                return person?.["DeathDateDecade"];
            default:
                return "[unknown]";
        }
    }

    let [day, month, year] = prop
        .split("-")
        .reverse()
        .map((x) => parseInt(x));

    if (month === 0) {
        // month is unknown, rest doesn't make sense
        tokens = tokens.filter((token) => token.includes("Y"));
    }

    tokens = tokens
        .map((token) => {
            if (!"DMY".includes(token[0])) {
                return token;
            }

            return Object({
                D: day ? day : null,
                DD: day ? String(day).padStart(2, "0") : null,
                M: month ? month : null,
                MM: month ? String(month).padStart(2, "0") : null,
                MMM: month ? MONTHS[month - 1].slice(0, 3) : null,
                MMMM: month ? MONTHS[month - 1] : null,
                YYYY: year ? String(year).padStart(4, "0") : null,
            })[token];
        })
        .filter((token) => token !== null);

    let serialized = tokens.join("");
    serialized = serialized.replaceAll(" ,", ","); // solves one of many possible issues when the day is unknown

    let certainty = options.withCertainty ? `${CERTAINTY_MAP?.[person?.DataStatus[fieldName]] || ""} ` : "";

    return `${certainty}${serialized}`;
};

/**
 * Serializes WikiTree complete name
 * @param  {object}  person Person object received from WikiTree API
 * @param  {object}  options object containing following options
 *                      * {array[string]} fields - possible values: `FirstName`, `LastNameCurrent`, `LastNameAtBirth`,
 *                                                                  `MiddleName`, `Nickname`, `Prefix`, `Suffix`
 * @return {string} Serialized name
 */
window.wtCompleteName = function (person, options = {}) {
    const DEFAULT_OPTIONS = { fields: ["FirstName", "LastNameCurrent", "LastNameAtBirth", "MiddleName"] };
    options = { ...DEFAULT_OPTIONS, ...options };

    const has = (field) => options.fields.includes(field);

    let lastName = ""; // Protect against possible unassigned variable
    if (has("LastNameAtBirth") && has("LastNameCurrent")) {
        lastName =
            person?.LastNameCurrent !== person.LastNameAtBirth
                ? (person?.LastNameAtBirth ? `(${person.LastNameAtBirth}) ` : null) + person.LastNameCurrent
                : person?.LastNameAtBirth || null;
    } else if (has("LastNameAtBirth")) {
        lastName = person?.LastNameAtBirth ? person.LastNameAtBirth : person?.LastNameCurrent || null;
    } else if (has("LastNameCurrent")) {
        lastName = person?.LastNameCurrent ? person.LastNameCurrent : person?.LastNameAtBirth || null;
    }

    const result = [
        has("Prefix") && person?.Prefix ? person.Prefix : null,
        has("FirstName") && (person?.FirstName || person.RealName) ? person.FirstName || person.RealName : null,
        has("MiddleName") && person?.MiddleName ? person.MiddleName : null,
        has("Nickname") && person?.Nicknames ? `<span class="nickname">„${person.Nicknames}"</span>` : null,
        lastName,
        has("Suffix") && person?.Suffix ? person.Suffix : null,
    ];

    return result.filter((part) => part !== null).join(" ");
};

// Our basic constructor for a Person. We expect the "person" data from the API returned result
// (see getPerson below). The basic fields are just stored in the internal _data array.
// We pull out the Parent and Child elements as their own Person objects.
WikiTreeAPI.Person = class Person {
    constructor(data) {
        this._data = data;

        if (data.Parents) {
            for (const p in data.Parents) {
                if (data.Parents.hasOwnProperty(p)) {
                    this._data.Parents[p] = new WikiTreeAPI.Person(data.Parents[p]);
                }
            }
        }
        if (data.Children) {
            for (const c in data.Children) {
                if (data.Children.hasOwnProperty(c)) {
                    this._data.Children[c] = new WikiTreeAPI.Person(data.Children[c]);
                }
            }
        }
    }

    // Basic "getters" for the data elements.
    getId() {
        return this._data.Id;
    }
    getName() {
        return this._data.Name;
    }
    getGender() {
        return this._data.Gender;
    }
    getBirthDate() {
        return this._data.BirthDate;
    }
    getBirthLocation() {
        return this._data.BirthLocation;
    }
    getDeathDate() {
        return this._data.DeathDate;
    }
    getDeathLocation() {
        return this._data.DeathLocation;
    }
    getChildren() {
        return this._data.Children;
    }
    getFatherId() {
        return this._data.Father;
    }
    getMotherId() {
        return this._data.Mother;
    }
    getDisplayName() {
        return this._data.BirthName ? this._data.BirthName : this._data.BirthNamePrivate;
    }
    getPhotoUrl() {
        if (this._data.PhotoData && this._data.PhotoData.url) {
            return this._data.PhotoData.url;
        }
    }

    // Getters for Mother and Father return the Person objects, if there is one.
    // The getMotherId and getFatherId functions above return the actual .Mother and .Father data elements (ids).
    getMother() {
        if (this._data.Mother && this._data.Parents) {
            return this._data.Parents[this._data.Mother];
        }
    }
    getFather() {
        if (this._data.Father && this._data.Parents) {
            return this._data.Parents[this._data.Father];
        }
    }

    // We use a few "setters". For the parents, we want to update the Parents Person objects as well as the ids themselves.
    // For TreeViewer we only set the parents and children, so we don't need setters for all the _data elements.
    setMother(person) {
        const id = person.getId();
        const oldId = this._data.Mother;
        this._data.Mother = id;
        if (!this._data.Parents) {
            this._data.Parents = {};
        } else if (oldId) {
            delete this._data.Parents[oldId];
        }
        this._data.Parents[id] = person;
    }
    setFather(person) {
        const id = person.getId();
        const oldId = this._data.Father;
        this._data.Father = id;
        if (!this._data.Parents) {
            this._data.Parents = {};
        } else if (oldId) {
            delete this._data.Parents[oldId];
        }
        this._data.Parents[id] = person;
    }
    setChildren(children) {
        this._data.Children = children;
    }
}; // End Person class definition

// To get a Person for a given id, we POST to the API's getPerson action. When we get a result back,
// we convert the returned JSON data into a Person object.
// Note that postToAPI returns the Promise from JavaScript's fetch() call.
// That feeds our .then() here, which also returns a Promise, which gets resolved by the return inside the "then" function.
// So we can use this through our asynchronous actions with something like:
// WikiTree.getPerson.then(function(result) {
//    // the "result" here is that from our API call. The profile data is in result[0].person.
// });
//
WikiTreeAPI.getPerson = function (id, fields) {
    return WikiTreeAPI.postToAPI({
        action: "getPerson",
        key: id,
        fields: fields.join(","),
        resolveRedirect: 1,
    }).then(function (result) {
        return new WikiTreeAPI.Person(result[0].person);
    });
};
// To get a set of Ancestors for a given id, we POST to the API's getAncestors action. When we get a result back,
// we leave the result as an array of objects
// Note that postToAPI returns the Promise from JavaScript's fetch() call.
// That feeds our .then() here, which also returns a Promise, which gets resolved by the return inside the "then" function.

// So we can use this through our asynchronous actions with something like:
// WikiTree.getAncestors(myID, 5, ['Id','Name', 'LastNameAtBirth']).then(function(result) {
//    // the "result" here is that from our API call. The profile data is in result[0].ancestors, which will be an array of objects
// });

// WARNING:  If you just do a NewAncestorsArray = WikiTree.getAncestors(id,depth,fields);
//     --> what you get is the promise object - NOT the array of ancestors you might expect.
// You HAVE to use the .then() with embedded function to wait and process the results
//
WikiTreeAPI.getAncestors = function (id, depth, fields) {
    return WikiTreeAPI.postToAPI({
        action: "getAncestors",
        key: id,
        depth: depth,
        fields: fields.join(","),
        resolveRedirect: 1,
    }).then(function (result) {
        // console.log( result[0].ancestors );
        return result[0].ancestors;
    });
};

// To get a set of Relatives for a given id or a SET of ids, we POST to the API's getRelatives action. When we get a result back,
// we leave the result as an array of objects
// Note that postToAPI returns the Promise from JavaScript's fetch() call.
// That feeds our .then() here, which also returns a Promise, which gets resolved by the return inside the "then" function.

// PARAMETERS:
//		IDs 	: can be a single string, with a single ID or a set of comma separated IDs - OR - it can be an array of IDs
//		fields	: an array of fields to return for each profile (same as for getPerson or getProfile)
//		options	: an option object which can contain these key-value pairs
// bioFormat	Optional: "wiki", "html", or "both"
// getParents	If true, the parents are returned
// getChildren	If true, the children are returned
// getSiblings	If true, the siblings are returned
// getSpouses	If true, the spouses are returned

// So we can use this through our asynchronous actions with something like:

// WikiTree.getRelatives(nextIDsToLoad, ['Id','Name', 'LastNameAtBirth'], {getParents:true} ).then(
//		function(result) {
//  	 	  // FUNCTION STUFF GOES HERE TO PROCESS THE ITEMS returned
//				 for (let index = 0; index < result.length; index++) {
//				 	thePeopleList.add(result[index].person);
//				 }
//		};

// NOTE:  the "result" here that is the input to the .then function is the JSON from our API call. The profile data is in result[0].items, which will be an array of objects
//  Each object (or item) has a key, user_id, user_name, then a person object (that contains the fields requested),
//	 and inside that person object could be a Parents object, a Children object, a Siblings object and a Spouses object.
//   If there is a Parents object, then in the list of fields will be Mother and Father, even if they weren't originally in the fields list parameter
// });

// WARNING:  See note above about what you get if you don't use the .then() ....
//
WikiTreeAPI.getRelatives = function (IDs, fields, options = {}) {
    let getRelativesParameters = {
        action: "getRelatives",
        keys: IDs.join(","),
        fields: fields.join(","),
        resolveRedirect: 1,
    };

    // go through the options object, and add any of those options to the getRelativesParameters
    for (const key in options) {
        if (Object.hasOwnProperty.call(options, key)) {
            getRelativesParameters[key] = options[key];
        }
    }
    // console.log("getRelativesParameters: ", getRelativesParameters);

    return WikiTreeAPI.postToAPI(getRelativesParameters).then(function (result) {
        // console.log("RESULT from getRelatives:", result );
        return result[0].items;
    });
};

// To get the Watchlist for the logged-in user, we POST to the API's getWatchlist action. When we get a result back,
// we leave the result as an array of objects
// Note that postToAPI returns the Promise from jquerys .ajax() call.
// That feeds our .then() here, which also returns a Promise, which gets resolved by the return inside the "then" function.

// So we can use this through our asynchronous actions with something like:
// WikiTree.getWatchlist(limit, getPerson, getSpace, fields).then(function(result) {
//    // the "result" here is that from our API call. The profile data is in result[0].watchlist, which will be an array of objects
// });
WikiTreeAPI.getWatchlist = function (limit, getPerson, getSpace, fields) {
    return WikiTreeAPI.postToAPI({
        action: "getWatchlist",
        limit: limit,
        getPerson: getPerson,
        getSpace: getSpace,
        fields: fields.join(","),
        resolveRedirect: 1,
    }).then(function (result) {
        return result[0].watchlist;
    });
};

/**
 * To get the photos for a given ID, we POST to the API's getPhotos action. When we get a result back we leave the
 * result as an array of objects as given in https://github.com/wikitree/wikitree-api/blob/main/getPhotos.md
 *
 * The ID given may be one of:
 *      a WikiTree ID, i.e. Surname-{number}
 *      a page ID, i.e. {number}, note that this is NOT the person ID
 *      a free-space profile name, i.e. Space:PageName, note that the 'Space:' is _required_
 *
 * As an alternative, a person_id can be supplied instead of the main ID by passing `{person_id: #value}`. This will
 * be converted into an appropriate WikiTree ID.
 *
 * An associative array of options should be provided in order to vary the default options if required. Options are:
 *      resolveRedirect:    If 1, then requested profiles that are redirections are followed to the final profile
 *      limit:              The number of photos to return. Default = 10. Maximum = 100.
 *      start:              The starting index of the photo set. Default = 0. [First photo]
 *      order:              The sort order of the photos. Valid values are:
 *                              "PageID"        [Default]
 *                              "Uploaded"      [Uploaded time stamp]
 *                              "ImageName"     [The base filename of the image]
 *                              "Date"          [The descriptive date]
 *
 * Returns an array containing up to six fields:
 *      status:             The status of the query response. #0 = everything okay. {string} = error message.
 *      page_name:          The translated version of the original passed id
 *   or page_id:
 *      limit:              Confirmation of limit passed
 *      start:              Confirmation of start passed
 *      order:              Confirmation of order passed
 *      photos:             Array of photo results, each photo record consists of:
 *                  PageId:     The pageId of the image/photo
 *                  ImageName:  Base filename of the photo
 *                  Title:      Title from Image details
 *                  Location:   Location from Image details
 *                  Date:       Date from Image details
 *                  Type:       Type from Image details, 'photo' or 'source'
 *                  Size:       Size of image in bytes
 *                  Width:      Width of image in pixels
 *                  Height:     Height of image in pixels
 *                  Uploaded:   Date and time when the image was uploaded to WT
 *                  URL:        The URL (relative to https://wikitree.com/) of the Image page, usually /photo/ext/ImageName
 *                  URL_300:    The relative URL of the 300px version of the image
 *                  URL_75:     The relative URL of the 75px version of the image
 *
 * @param {int|string|Object} id
 * @param {*} options
 */
WikiTreeAPI.getPhotos = async function (id = null, options = {}) {
    if (typeof id === "object") {
        if (!id.hasOwnProperty("person_id")) {
            return "";
        }
        let p_data = await window.WikiTreeAPI.getPerson(id.person_id, ["Id", "Name"]);
        id = p_data._data.Name;
    }
    const DEFAULT_OPTIONS = { resolveRedirect: 1, limit: 10, start: 0, order: "PageId" };
    // Merge passed options and set the correct action (to prevent overriding)
    let get_photo_ops = { ...DEFAULT_OPTIONS, ...options, action: "getPhotos", key: id };
    return WikiTreeAPI.postToAPI(get_photo_ops).then(function (result) {
        return result[0];
    });
};

/**
 *
 */
WikiTreeAPI.getDescendants = function () {};

// This is just a wrapper for the JavaScript fetch() call, sending along necessary options for the WikiTree API.
WikiTreeAPI.postToAPI = async function (postData) {
    const API_URL = "https://api.wikitree.com/api.php";

    let formData = new FormData();
    for (const key in postData) {
        if (postData.hasOwnProperty(key)) {
            formData.append(key, postData[key]);
        }
    }
    // We're POSTing the data, so we don't worry about URL size limits and want JSON back.
    let options = {
        method: "POST",
        credentials: localTesting ? "omit" : "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
    };
    const response = await fetch(API_URL, options);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}: ${response.statusText}`);
    }
    return await response.json();
};

// Utility function to get/set cookie data.
// Adapted from https://github.com/carhartl/jquery-cookie which is obsolete and has been
// superseded by https://github.com/js-cookie/js-cookie. The latter is a much more complete cookie utility.
// Here we just want to get and set some simple values in limited circumstances to track an API login.
// So we'll use a stripped-down function here and eliminate a prerequisite. This function should not be used
// in complex circumstances.
//
// key     = The name of the cookie to set/read. If reading and no key, then array of all key/value pairs is returned.
// value   = The value to set the cookie to. If undefined, the value is instead returned. If null, cookie is deleted.
// options = Used when setting the cookie,
//           options.expires = Date or number of days in the future (converted to Date for cookie)
//           options.path, e.g. "/"
//           options.domain, e.g. "apps.wikitree.com"
//           options.secure, if true then cookie created with ";secure"
WikiTreeAPI.cookie = function (key, value, options) {
    if (options === undefined) {
        options = {};
    }

    // If we have a value, we're writing/setting the cookie.
    if (value !== undefined) {
        if (value === null) {
            options.expires = -1;
        }
        if (typeof options.expires === "number") {
            var days = options.expires;
            options.expires = new Date();
            options.expires.setDate(options.expires.getDate() + days);
        }
        value = String(value);
        return (document.cookie = [
            encodeURIComponent(key),
            "=",
            value,
            options.expires ? "; expires=" + options.expires.toUTCString() : "",
            options.path ? "; path=" + options.path : "",
            options.domain ? "; domain=" + options.domain : "",
            options.secure ? "; secure" : "",
        ].join(""));
    }

    // We're not writing/setting the cookie, we're reading a value from it.
    const cookies = document.cookie.split("; ");

    let result = key ? null : {};
    for (let i = 0, l = cookies.length; i < l; i++) {
        const parts = cookies[i].split("=");
        let name = parts.shift();
        name = decodeURIComponent(name.replace(/\+/g, " "));
        let c_value = parts.join("=");
        c_value = decodeURIComponent(c_value.replace(/\+/g, " "));

        if (key && key === name) {
            result = c_value;
            break;
        }
        if (!key) {
            result[name] = c_value;
        }
    }
    return result;
};
