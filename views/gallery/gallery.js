/**
 * Show a gallery of photos for a given id
 *
 * @type {Window.GalleryView}
 */

window.GalleryView = class GalleryView extends window.View {
    meta() {
        return {
            title: "Gallery of Photos",
            description: "Show a gallery of photos for a given WikiTree page ID",
            docs: "",
        };
    }

    init(container_selector, page_id) {
        const view = new window.Gallery(container_selector, page_id);
        view.displayGallery();
    }
};

window.Gallery = class Gallery {
    constructor(container_selector, page_id) {
        this.selector = container_selector;
        this.page_id = page_id;
    }

    async displayGallery() {
        let p_data = await window.WikiTreeAPI.getPerson(this.page_id, ["Id", "Name"]);
        let data = await window.WikiTreeAPI.getPhotos(p_data._data.Name);
        let gallery = data;
        if (gallery.hasOwnProperty("status")) {
            if (typeof gallery.status !== "number" || gallery.status !== 0) {
                $(this.selector).html(`<p>Unable to find page, or no photos on requested page</p>`);
                return;
            }
        } else {
            $(this.selector).html(`<p>Page not found</p>`);
            return;
        }
        $(this.selector).html(`<div id="gallery"></div><div id="debug"></div>`);
        if (0) {
            this.showDEBUG($("#debug"), gallery);
        }
        const wv = $("#gallery");
        wv[0].style.display = "flex";
        for (const photo_no in gallery.photos) {
            if (gallery.photos.hasOwnProperty(photo_no)) {
                const photo = gallery.photos[photo_no];
                let p_html = `<div class="photo">`;
                p_html += `<img src="https://www.wikitree.com${photo.URL_300}" alt="${photo.ImageName} title="${photo.ImageName}"/>`;
                p_html += `</div>`;
                wv.append(p_html);
            }
        }
    }

    showDEBUG(wv, obj) {
        // DEBUG routine for following section
        function mkStr(obj) {
            if (obj) {
                const s = Object.entries(obj)
                    .map(([k, v]) => `${k}: ${v}`)
                    .join("<br/> ");
                return `<p style="font-family: 'Courier New',monospace">${s}</p>`;
            }
            return "";
        }

        wv.append(`<p>Returned object:</p>${mkStr(obj)}`);
        if (Object.keys(obj.photos).length > 0) {
            let p_html = "";
            let pn = 0;
            for (const photo_no in obj.photos) {
                if (obj.photos.hasOwnProperty(photo_no)) {
                    const photo = obj.photos[photo_no];
                    pn += 1;
                    p_html += `<p>Photo #${pn}</p>${mkStr(photo)}`;
                }
            }
            wv.append(`<p>Photo objects:</p>${p_html}`);
        } else {
            wv.append("<p>Hmm… no photos found?</p>");
        }
    }
};
