export const EnglandCounties = [
    "Bedfordshire",
    "Berkshire",
    "Bristol",
    "Buckinghamshire",
    "Cambridgeshire",
    "Cheshire",
    "Cornwall",
    "Cumbria",
    "Derbyshire",
    "Devon",
    "Dorset",
    "Durham",
    "East Riding of Yorkshire",
    "East Sussex",
    "Essex",
    "Gloucestershire",
    "Greater London",
    "Greater Manchester",
    "Hampshire",
    "Herefordshire",
    "Hertfordshire",
    "Isle of Wight",
    "Kent",
    "Lancashire",
    "Leicestershire",
    "Lincolnshire",
    "Liverpool",
    "City of London",
    "Metropolitian Borough of Luton",
    "Merseyside",
    "Middlesex",
    "Norfolk",
    "Northamptonshire",
    "Northumberland",
    "Nottinghamshire",
    "Nuneaton and Bedworth",
    "Oxfordshire",
    "Rutland",
    "Salford",
    "Shropshire",
    "Somerset",
    "South Gloucestershire",
    "South Yorkshire",
    "Staffordshire",
    "Suffolk",
    "Surrey",
    "Tyne and Wear",
    "Warwickshire",
    "West Midlands",
    "West Sussex",
    "West Yorkshire",
    "Wight",
    "Wiltshire",
    "Worcestershire",
];
export const englandCountyAbbreviations = {
    Beds: "Bedfordshire",
    Berks: "Berkshire",
    Bucks: "Buckinghamshire",
    Cambs: "Cambridgeshire",
    Ches: "Cheshire",
    Derbys: "Derbyshire",
    Gloucs: "Gloucestershire",
    Hants: "Hampshire",
    Heref: "Herefordshire",
    Herts: "Hertfordshire",
    Lancs: "Lancashire",
    Leics: "Leicestershire",
    Lincs: "Lincolnshire",
    Middx: "Middlesex",
    Northants: "Northamptonshire",
    Northumb: "Northumberland",
    Notts: "Nottinghamshire",
    Oxon: "Oxfordshire",
    Salop: "Shropshire",
    Shrops: "Shropshire",
    Som: "Somerset",
    Staffs: "Staffordshire",
    Warks: "Warwickshire",
    Wilts: "Wiltshire",
    Worcs: "Worcestershire",
    Yorks: "Yorkshire",
};

export const ScotlandCounties = [
    "Aberdeen",
    "Aberdeenshire",
    "Angus",
    "Argyll and Bute",
    "Ayrshire and Arran",
    "Banffshire",
    "Berwickshire",
    "Clackmannanshire",
    "Dumfries and Galloway",
    "Dundee City",
    "East Lothian",
    "Edinburgh",
    "Falkirk",
    "Fife",
    "Glasgow City",
    "Highland",
    "Inverclyde",
    "Midlothian",
    "Moray",
    "Na h-Eileanan Siar",
    "Orkney Islands",
    "Perth and Kinross",
    "Renfrewshire",
    "Scottish Borders",
    "Shetland Islands",
    "Stirling",
    "West Lothian",
];
export const WalesCounties = [
    "Blaenau Gwent",
    "Bridgend",
    "Caerphilly",
    "Cardiff",
    "Carmarthenshire",
    "Ceredigion",
    "Conwy",
    "Denbighshire",
    "Flintshire",
    "Gwynedd",
    "Isle of Anglesey",
    "Merthyr Tydfil",
    "Monmouthshire",
    "Neath Port Talbot",
    "Newport",
    "Pembrokeshire",
    "Powys",
    "Rhondda Cynon Taf",
    "Swansea",
    "Torfaen",
    "Vale of Glamorgan",
    "Wrexham",
];
export const IrelandCounties = [
    "County Carlow",
    "County Cavan",
    "County Clare",
    "County Cork",
    "County Donegal",
    "County Dublin",
    "County Galway",
    "County Kerry",
    "County Kildare",
    "County Kilkenny",
    "County Laois",
    "County Leitrim",
    "County Limerick",
    "County Longford",
    "County Louth",
    "County Mayo",
    "County Meath",
    "County Monaghan",
    "County Offaly",
    "County Roscommon",
    "County Sligo",
    "County Tipperary",
    "County Waterford",
    "County Westmeath",
    "County Wexford",
    "County Wicklow",
];
export const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
];
// Combine all UK counties into one array
export const ukCounties = [...EnglandCounties, ...ScotlandCounties, ...WalesCounties];

export const usStatesDetails = [
    {
        name: "Alabama",
        abbreviation: "AL",
        admissionDate: "1819-12-14",
        former_name: "Alabama Territory",
        former_names: {
            "Alabama Territory": {
                start: "1817-10-10",
                end: "1819-12-14",
            },
            "Mississippi Territory": {
                start: "1798-04-07",
                end: "1817-10-10",
            },
            "West Florida (Spain)": {
                start: "1513-01-01",
                end: "1812-05-14",
            },
            "La Florida (Spain)": {
                start: "1513-01-01",
                end: "1794-12-31",
            },
            "Georgia": {
                start: "1776-07-04",
                end: "1803-12-31",
            },
            "South Carolina": {
                start: "1776-07-04",
                end: "1786-12-31",
            },
            "Province of South Carolina": {
                start: "1712-01-01",
                end: "1776-07-04",
            },
            "Clarendon Province, Carolina": {
                start: "1669-07-21",
                end: "1712-01-01",
            },
            "Province of Carolina": {
                start: "1663-01-01",
                end: "1669-07-20",
            },
        },
    },
    {
        name: "Alaska",
        abbreviation: "AK",
        admissionDate: "1959-01-03",
        former_name: "Territory of Alaska",
        former_names: {
            "Alaska Territory": {
                start: "1912-08-24",
                end: "1959-01-03",
            },
            "District of Alaska": {
                start: "1884-05-17",
                end: "1912-08-24",
            },
            "Department of Alaska": {
                start: "1867-10-18",
                end: "1884-05-17",
            },
            "Russkaya America": {
                start: "1733-01-01",
                end: "1867-10-18",
            },
        },
    },
    {
        name: "Arizona",
        abbreviation: "AZ",
        admissionDate: "1912-02-14",
        former_name: "Arizona Territory",
        former_names: {
            "Arizona Territory": {
                start: "1863-02-24",
                end: "1912-02-14",
            },
            "New Mexico Territory": {
                start: "1850-09-09",
                end: "1863-02-24",
            },
            "U.S. prov. gov. of New Mexico": {
                start: "1846-01-01",
                end: "1850-09-09",
            },
            "2nd Estados Unidos Mexicano": {
                start: "1846-08-22",
                end: "1848-02-02",
            },
            "Central Republic in Mexico": {
                start: "1835-10-23",
                end: "1846-08-22",
            },
            "1st Estados Unidos Mexicanos": {
                start: "1823-03-19",
                end: "1835-10-23",
            },
            "Imperio Mexicano": {
                start: "1821-09-28",
                end: "1823-03-19",
            },
            "Alta California, Nueva España": {
                start: "1565-01-01",
                end: "1821-09-27",
            },
        },
    },
    {
        name: "Arkansas",
        abbreviation: "AR",
        admissionDate: "1836-06-15",
        former_name: "Arkansas Territory",
        former_names: {
            "Arkansaw Territory": {
                start: "1819-03-02",
                end: "1836-06-15",
            },
            "Missouri Territory": {
                start: "1812-01-01",
                end: "1819-03-02",
            },
            "Louisiana Territory": {
                start: "1805-07-04",
                end: "1812-06-04",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1800-10-30",
                end: "1803-10-03",
            },
            "Luisiana, Nueva Espa\u00f1a": {
                start: "1762-11-13",
                end: "1800-10-30",
            },
            "la Louisiane fran\u00e7aise, Nouvelle-France": {
                start: "1682-04-09",
                end: "1762-11-12",
            },
        },
    },
    {
        name: "California",
        abbreviation: "CA",
        admissionDate: "1850-09-09",
        former_name: "California Republic",
        former_names: {
            "US Military Government": {
                start: "1846-07-09",
                end: "1850-09-09",
            },
            "California Republic": {
                start: "1846-06-14",
                end: "1846-07-09",
            },
            "2nd Estados Unidos Mexicano": {
                start: "1846-06-14",
                end: "1846-08-22",
            },
            "Central Republic in Mexico": {
                start: "1835-10-23",
                end: "1846-08-22",
            },
            "1st Estados Unidos Mexicanos": {
                start: "1823-11-01",
                end: "1835-10-23",
            },
            "Imperio Mexicano": {
                start: "1821-09-28",
                end: "1823-03-01",
            },
            "Alta California, Nueva España": {
                start: "1565-01-01",
                end: "1821-09-27",
            },
        },
    },
    {
        name: "Colorado",
        abbreviation: "CO",
        admissionDate: "1876-08-01",
        former_name: "Colorado Territory",
        former_names: {
            "Colorado Territory": {
                start: "1861-02-28",
                end: "1876-08-01",
            },
            "Unorganized US Territory": {
                start: "1821-08-10",
                end: "1861-02-28",
            },
            "Missouri Territory": {
                start: "1812-06-04",
                end: "1821-08-10",
            },
            "Louisiana Territory": {
                start: "1804-07-04",
                end: "1812-06-04",
            },
            "La Louisiane française": {
                start: "1800-10-30",
                end: "1803-04-30",
            },
            "Louisiana Purchase": {
                start: "1803-04-30",
                end: "1804-07-04",
            },
            "Luisiana, Nueva España": {
                start: "1762-11-13",
                end: "1800-10-30",
            },
            "Santa Fe de Nuevo México, Nueva España": {
                start: "1521-01-01",
                end: "1762-11-12",
            },
            "la Louisiane française, Nouvelle-France": {
                start: "1682-04-09",
                end: "1762-11-12",
            },
        },
    },
    {
        name: "Connecticut",
        abbreviation: "CT",
        admissionDate: "1788-01-09",
        former_name: "Connecticut Colony",
        postRevolutionName: "State of Connecticut",
        former_names: {
            "Connecticut": {
                start: "1776-07-04",
                end: "1788-01-09",
            },
            "Connecticut Colony": {
                start: "1636-01-01",
                end: "1776-07-04",
            },
            "Saybrook Colony": {
                start: "1635-01-01",
                end: "1644-01-01",
            },
            "New Haven Colony": {
                start: "1637-01-01",
                end: "1665-01-01",
            },
        },
    },
    {
        name: "Delaware",
        abbreviation: "DE",
        admissionDate: "1787-12-07",
        former_name: "Colony of Delaware",
        postRevolutionName: "State of Delaware",
        former_names: {
            "Delaware": {
                start: "1776-01-01",
                end: "1787-12-07",
            },
            "Delaware Colony": {
                start: "1672-01-01",
                end: "1776-01-01",
            },
            "Delaware County, Province of Maryland": {
                start: "1669-01-01",
                end: "1672-01-01",
            },
            "New Sweden": {
                start: "1631-01-01",
                end: "1655-01-01",
            },
            "New Netherland": {
                start: "1614-01-01",
                end: "1667-01-01",
            },
        },
    },
    {
        name: "Florida",
        abbreviation: "FL",
        admissionDate: "1845-03-03",
        former_name: "Florida Territory",
        former_names: {
            "Florida Territory": {
                start: "1821-02-22",
                end: "1845-03-03",
            },
            "Spanish West Florida": {
                start: "1783-01-01",
                end: "1822-03-30",
            },
            "British West Florida": {
                start: "1763-01-01",
                end: "1783-01-01",
            },
            "Spanish East Florida": {
                end: "1821-02-22",
                start: "1783-01-01",
            },
            "British East Florida": {
                start: "1763-01-01",
                end: "1783-01-01",
            },
            "La Florida": {
                start: "1513-01-01",
                end: "1763-01-01",
            },
        },
    },
    {
        name: "Georgia",
        abbreviation: "GA",
        admissionDate: "1788-01-02",
        former_name: "Province of Georgia",
        postRevolutionName: "State of Georgia",
        former_names: {
            "South Carolina": {
                start: "1776-07-04",
                end: "1787-01-01",
            },
            "Province of Georgia": {
                start: "1732-06-09",
                end: "1776-07-04",
            },
            "Clarendon Province, Carolina": {
                start: "1669-07-21",
                end: "1711-12-31",
            },
            "Province of Carolina": {
                start: "1663-01-01",
                end: "1669-07-20",
            },
        },
    },
    {
        name: "Hawaii",
        abbreviation: "HI",
        admissionDate: "1959-08-21",
        former_name: "Territory of Hawaii",
        former_names: {
            "Hawaii Territory": {
                start: "1898-08-12",
                end: "1959-08-21",
            },
            "Republic of Hawai'i": {
                start: "1894-07-04",
                end: "1898-08-12",
            },
            "Provisional Government of Hawai'i": {
                start: "1893-01-17",
                end: "1894-07-04",
            },
            "Kingdom of Hawai'i": {
                start: "1795-05-01",
                end: "1893-01-17",
            },
        },
    },
    {
        name: "Idaho",
        abbreviation: "ID",
        admissionDate: "1890-07-03",
        former_name: "Idaho Territory",
        former_names: {
            "Idaho Territory": {
                start: "1863-03-03",
                end: "1890-07-03",
            },
            "Washington Territory": {
                start: "1853-03-02",
                end: "1863-03-03",
            },
            "Oregon Territory": {
                start: "1849-03-03",
                end: "1859-02-14",
            },
            "US Prov. Gov. of Oregon": {
                start: "1843-05-02",
                end: "1849-03-03",
            },
            "Columbia District": {
                start: "1818-01-01",
                end: "1821-01-01",
            },
            "Columbia Department": {
                start: "1821-01-01",
                end: "1843-05-02",
            },
            "Nueva España": {
                start: "1775-01-01",
                end: "1819-01-01",
            },
        },
    },
    {
        name: "Illinois",
        abbreviation: "IL",
        admissionDate: "1818-12-03",
        former_name: "Illinois Territory",
        former_names: {
            "Illinois Territory": {
                start: "1809-03-01",
                end: "1818-12-03",
            },
            "Indiana Territory": {
                start: "1800-07-04",
                end: "1809-03-01",
            },
            "Northwest Territory": {
                start: "1783-09-03",
                end: "1800-07-04",
            },
            "Province of Quebec": {
                start: "1763-02-10",
                end: "1783-09-03",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1717-01-01",
                end: "1763-01-01",
            },
            "Pays des Illinois, Nouvelle-France": {
                start: "1673-01-01",
                end: "1717-01-01",
            },
        },
    },
    {
        name: "Indiana",
        abbreviation: "IN",
        admissionDate: "1816-12-11",
        former_name: "Indiana Territory",
        former_names: {
            "Indiana Territory": {
                start: "1800-07-04",
                end: "1816-12-11",
            },
            "Northwest Territory": {
                start: "1783-09-03",
                end: "1800-07-04",
            },
            "Province of Quebec": {
                start: "1763-02-10",
                end: "1783-09-03",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1717-01-01",
                end: "1763-01-01",
            },
            "Pays des Illinois, Nouvelle-France": {
                start: "1673-01-01",
                end: "1717-01-01",
            },
        },
    },
    {
        name: "Iowa",
        abbreviation: "IA",
        admissionDate: "1846-12-28",
        former_name: "Iowa Territory",
        former_names: {
            "Iowa Territory": {
                start: "1838-07-04",
                end: "1846-12-28",
            },
            "Wisconsin Territory": {
                start: "1836-07-03",
                end: "1838-07-04",
            },
            "Michigan Territory": {
                start: "1834-01-01",
                end: "1836-07-03",
            },
            "US Unorganized Territory": {
                start: "1834-01-01",
                end: "1803-04-30",
            },
            "Missouri Territory": {
                start: "1812-06-04",
                end: "1821-08-10",
            },
            "Louisiana Territory": {
                start: "1805-07-04",
                end: "1812-06-04",
            },
            "Louisiana Purchase": {
                start: "1803-04-30",
                end: "1804-10-01",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1800-10-30",
                end: "1803-04-30",
            },
            "Luisiana, Nueva Espa\u00f1a": {
                start: "1762-11-13",
                end: "1800-10-30",
            },
            "la Louisiane fran\u00e7aise, Nouvelle-France": {
                start: "1717-01-01",
                end: "1762-11-12",
            },
            "Pays des Illinois, Nouvelle-France": {
                start: "1673-01-01",
                end: "1717-01-01",
            },
        },
    },
    {
        name: "Kansas",
        abbreviation: "KS",
        admissionDate: "1861-01-29",
        former_name: "Kansas Territory",
        former_names: {
            "Kansas Territory": {
                start: "1854-05-30",
                end: "1861-01-29",
            },
            "Louisiana Territory": {
                start: "1803-04-30",
                end: "1854-05-30",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1800-10-30",
                end: "1803-04-30",
            },
            "Luisiana, Nueva Espa\u00f1a": {
                start: "1762-11-13",
                end: "1800-10-30",
            },
            "la Louisiane fran\u00e7aise, Nouvelle-France": {
                start: "1682-04-09",
                end: "1762-11-12",
            },
        },
    },
    {
        name: "Kentucky",
        abbreviation: "KY",
        admissionDate: "1792-06-01",
        former_name: "Virginia",
        former_names: {
            "Indian Reserve": {
                start: "1763-02-10",
                end: "1783-01-01",
            },
            "Fincastle County, Virginia": {
                start: "1772-01-01",
                end: "1776-07-04",
            },
            "Transylvania Colony": {
                start: "1775-01-01",
                end: "1776-01-01",
            },
            "Kentucky County, Virginia": {
                start: "1776-12-31",
                end: "1792-06-01",
            },
            "Botetourt County, Virginia": {
                start: "1770-01-01",
                end: "1771-01-01",
            },
            "Augusta County, Virginia": {
                start: "1738-01-01",
                end: "1770-01-01",
            },
            "Orange County, Virginia": {
                start: "1734-08-01",
                end: "1738-01-01",
            },
        },
    },
    {
        name: "Louisiana",
        abbreviation: "LA",
        admissionDate: "1812-04-30",
        former_name: "Territory of Orleans",
        former_names: {
            "Territory of Orleans": {
                start: "1804-10-01",
                end: "1812-04-30",
            },
            "Sabine Free State": {
                start: "1806-01-01",
                end: "1821-01-01",
            },
            "Spanish West Florida": {
                start: "1783-01-01",
                end: "1821-07-16",
            },
            "Spanish Texas": {
                start: "1690-01-01",
                end: "1806-01-01",
            },
            "French Texas": {
                start: "1684-01-01",
                end: "1689-01-01",
            },
            "Louisiana Purchase": {
                start: "1803-04-30",
                end: "1804-10-01",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1800-10-30",
                end: "1803-04-30",
            },
            "La Florida": {
                start: "1513-01-01",
                end: "1763-01-01",
            },
            "Luisiana, Nueva Espa\u00f1a": {
                start: "1762-11-13",
                end: "1800-10-30",
            },
            "la Louisiane fran\u00e7aise, Nouvelle-France": {
                start: "1682-04-09",
                end: "1762-11-12",
            },
        },
    },
    {
        name: "Maine",
        abbreviation: "ME",
        admissionDate: "1820-03-15",
        former_name: "Massachusetts (District of Maine)",
        former_names: {
            "District of Maine": {
                end: "1819-03-15",
                start: "1780-10-25",
            },
            "Province of Maine": {
                end: "1780-10-25",
                start: "1776-07-04",
            },
            "Province of Maine, Massachusetts Bay": {
                start: "1691-10-07",
                end: "1760-01-01",
            },
            "Massachusetts Bay Colony": {
                start: "1630-08-10",
                end: "1691-10-07",
            },
            "Province of Maine ": {
                start: "1629-01-01",
                end: "1630-08-10",
            },
            "New Somersetshire": {
                start: "1635-01-01",
                end: "1647-01-01",
            },
            "Province of Maine,  New York": {
                start: "1664-01-01",
                end: "1691-10-07",
            },
            "Sagadahock Territory": {
                start: "1608-01-01",
                end: "1664-01-01",
            },
            "Acadie": {
                start: "1604-01-01",
                end: "1725-01-01",
            },
        },
    },
    {
        name: "Maryland",
        abbreviation: "MD",
        admissionDate: "1788-04-28",
        former_name: "Province of Maryland",
        postRevolutionName: "State of Maryland",
        former_names: {
            "Maryland": {
                start: "1776-07-04",
                end: "1788-04-28",
            },
            "Province of Maryland": {
                start: "1632-01-01",
                end: "1776-07-04",
            },
        },
    },
    {
        name: "Massachusetts",
        abbreviation: "MA",
        admissionDate: "1788-02-06",
        former_name: "Province of Massachusetts Bay",
        postRevolutionName: "Commonwealth of Massachusetts",
        former_names: {
            "Commonwealth of Massachusetts": {
                start: "1776-07-04",
                end: "1788-02-06",
            },
            "Province of Massachusetts Bay": {
                start: "1691-10-07",
                end: "1776-07-04",
            },
            "Massachusetts Bay Colony": {
                start: "1628-03-4",
                end: "1691-10-07",
            },
            "Plymouth Colony": {
                start: "1620-01-01",
                end: "1691-10-07",
            },
            "Plymouth Council for New England": {
                start: "1620-01-01",
                end: "1628-06-07",
            },
            "Plymouth Company": {
                start: "1606-01-01",
                end: "1620-01-01",
            },
        },
    },
    {
        name: "Michigan",
        abbreviation: "MI",
        admissionDate: "1837-01-26",
        former_name: "Michigan Territory",
        former_names: {
            "Michigan Territory": {
                start: "1805-06-30",
                end: "1837-01-26",
            },
            " Indiana Territory": {
                start: "1800-07-04",
                end: "1805-06-30",
            },
            "Northwest Territory, United States": {
                start: "1787-07-13",
                end: "1803-03-01",
            },
            "Province of Quebec": {
                start: "1763-02-10",
                end: "1783-09-03",
            },
            "Pays d'en Haut": {
                start: "1660-01-01",
                end: "1763-02-10",
            },
        },
    },
    {
        name: "Minnesota",
        abbreviation: "MN",
        admissionDate: "1858-05-11",
        former_name: "Minnesota Territory",
        former_names: {
            "Minnesota Territory": {
                start: "1849-03-03",
                end: "1858-05-11",
            },
            "Unorganized US Territory": {
                start: "1846-12-28",
                end: "1849-03-03",
            },
            "Iowa Territory": {
                start: "1838-07-04",
                end: "1846-12-28",
            },
            "Wisconsin Territory": {
                start: "1836-07-03",
                end: "1846-12-28",
            },
            "Michigan Territory": {
                start: "1818-12-03",
                end: "1836-07-03",
            },
            "Illinois Territory": {
                start: "1809-03-01",
                end: "1818-12-03",
            },
            "Indiana Territory": {
                start: "1803-04-30",
                end: "1809-03-01",
            },
            "Northwest Territory": {
                start: "1787-07-13",
                end: "1800-07-04",
            },
            "Province of Quebec": {
                start: "1763-01-01",
                end: "1783-01-01",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1717-01-01",
                end: "1762-11-13",
            },
            "Pays des Illinois, Nouvelle-France": {
                start: "1673-01-01",
                end: "1717-01-01",
            },
            "Luisiana, Nueva Espa\u00f1a": {
                start: "1762-11-13",
                end: "1783-07-13",
            },
        },
    },
    {
        name: "Mississippi",
        abbreviation: "MS",
        admissionDate: "1817-12-10",
        former_name: "Mississippi Territory",
        former_names: {
            "Mississippi Territory": {
                start: "1798-04-07",
                end: "1817-12-10",
            },
            "West Florida (Spain)": {
                start: "1513-01-01",
                end: "1812-05-14",
            },
            "Province of Carolina": {
                start: "1663-01-01",
                end: "1669-07-20",
            },
            "Clarendon Province, Carolina": {
                start: "1669-07-21",
                end: "1712-01-01",
            },
            "South Carolina": {
                start: "1712-01-01",
                end: "1776-07-04",
            },
            "Georgia": {
                start: "1732-06-09",
                end: "1704-07-04",
            },
            "La Florida (Spain)": {
                start: "1513-01-01",
                end: "1795-01-01",
            },
        },
    },
    {
        name: "Missouri",
        abbreviation: "MO",
        admissionDate: "1821-08-10",
        former_name: "Missouri Territory",
        former_names: {
            "Missouri Territory": {
                start: "1812-06-04",
                end: "1821-08-10",
            },
            "Louisiana Territory": {
                start: "1805-07-04",
                end: "1812-06-04",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1800-10-30",
                end: "1803-04-30",
            },
            "Luisiana, Nueva Espa\u00f1a": {
                start: "1762-11-13",
                end: "1800-10-30",
            },
            "la Louisiane fran\u00e7aise, Nouvelle-France": {
                start: "1682-04-09",
                end: "1762-11-12",
            },
        },
    },
    {
        name: "Montana",
        abbreviation: "MT",
        admissionDate: "1889-11-08",
        former_name: "Montana Territory",
        former_names: {
            "Montana Territory": {
                start: "1864-05-28",
                end: "1889-11-08",
            },
            "Dakota Territory": {
                start: "1861-03-02",
                end: "1864-05-28",
            },
            "Nebraska Territory": {
                start: "1854-05-30",
                end: "1867-03-01",
            },
            "Washington Territory": {
                start: "1853-03-02",
                end: "1863-03-02",
            },
            "Oregon Territory": {
                start: "1849-03-03",
                end: "1859-02-14",
            },
            "US Prov. Gov. of Oregon": {
                start: "1843-05-02",
                end: "1849-03-02",
            },
            "Columbia Department": {
                start: "1821-01-01",
                end: "1843-05-02",
            },
            "Columbia District": {
                start: "1818-01-01",
                end: "1821-01-01",
            },
            "Nueva España": {
                start: "1775-01-01",
                end: "1819-01-01",
            },
            "Louisiana Territory": {
                start: "1803-04-30",
                end: "1854-05-30",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1777-01-01",
                end: "1803-01-01",
            },
            "Luisiana, Nueva Espa\u00f1a": {
                start: "1762-11-13",
                end: "1800-10-30",
            },
            "la Louisiane fran\u00e7aise, Nouvelle-France": {
                start: "1682-04-09",
                end: "1762-11-12",
            },
        },
    },
    {
        name: "Nebraska",
        abbreviation: "NE",
        admissionDate: "1867-03-01",
        former_name: "Nebraska Territory",
        former_names: {
            "Nebraska Territory": {
                start: "1854-05-30",
                end: "1867-03-01",
            },
            "Louisiana Territory": {
                start: "1803-04-30",
                end: "1854-05-30",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1717-01-01",
                end: "1803-01-01",
            },
            "Luisiana, Nueva Espa\u00f1a": {
                start: "1762-11-13",
                end: "1800-10-30",
            },
            "la Louisiane fran\u00e7aise, Nouvelle-France": {
                start: "1682-04-09",
                end: "1762-11-12",
            },
        },
    },
    {
        name: "Nevada",
        abbreviation: "NV",
        admissionDate: "1864-10-31",
        former_name: "Nevada Territory",
        former_names: {
            "Nevada Territory": {
                start: "1861-03-02",
                end: "1864-10-31",
            },
            "Utah Territory ": {
                start: "1850-09-09",
                end: "1861-03-02",
            },
            "Unorganized US Territory": {
                start: "1848-02-02",
                end: "1850-09-09",
            },
            "Estados Unidos Mexicano": {
                end: "1848-02-02",
                start: "1846-08-22",
            },
            "Rep\u00fablica Centralista de M\u00e9xico. ": {
                end: "1846-08-22",
                start: "1835-10-23",
            },
            "Estados Unidos Mexicanos": {
                end: "1835-10-23",
                start: "1824-11-01",
            },
            "Imperio Mexicano": {
                end: "1821-09-26",
                Start: "1565-01-01",
            },
        },
    },
    {
        name: "New Hampshire",
        abbreviation: "NH",
        admissionDate: "1788-06-21",
        former_name: "Province of New Hampshire",
        postRevolutionName: "State of New Hampshire",
        former_names: {
            "New Hampshire": {
                start: "1776-07-04",
                end: "1788-06-21",
            },
            "Province of New Hampshire": {
                start: "1679-01-01",
                end: "1776-07-04",
            },
            "Massachusetts Bay Colony": {
                end: "1679-01-01",
                start: "1641-07-04",
            },
            "Colony of New Hampshire": {
                end: "1641-07-04",
                start: "1629-01-01",
            },
            "Plymouth Council": {
                start: "1620-01-01",
                end: "1635-06-07",
            },
            "Plymouth Company": {
                start: "1606-01-01",
                end: "1620-01-01",
            },
        },
    },
    {
        name: "New Jersey",
        abbreviation: "NJ",
        admissionDate: "1787-12-12",
        former_name: "Province of New Jersey",
        postRevolutionName: "State of New Jersey",
        former_names: {
            "New Jersey": {
                start: "1776-07-04",
                end: "1787-12-18",
            },
            "Province of New Jersey": {
                start: "1702-01-01",
                end: "1776-07-04",
            },
            "Province of West Jersey": {
                start: "1674-01-01",
                end: "1702-01-01",
            },
            "Province of East Jersey": {
                end: "1702-01-01",
                start: "1664-06-24",
            },
            "Colony of New Jersey": {
                end: "1664-06-24",
                start: "1664-06-24",
            },
            "New Netherland": {
                end: "1664-06-24",
                start: "1614-01-01",
            },
            "New Sweden": {
                end: "1655-01-01",
                start: "1638-01-01",
            },
        },
    },
    {
        name: "New Mexico",
        abbreviation: "NM",
        admissionDate: "1912-01-06",
        former_name: "New Mexico Territory",
        former_names: {
            "New Mexico Territory": {
                start: "1850-09-09",
                end: "1912-01-06",
            },
            "US prov. gov. of New Mexico": {
                start: "1846-01-01",
                end: "1850-09-09",
            },
            "Primera Rep\u00fablica Federal": {
                start: "1823-01-01",
                end: "1848-01-01",
            },
            "Imperio Mexicano": {
                start: "1821-01-01",
                end: "1823-01-01",
            },
            "Santa Fe de Nuevo M\u00e9xico, Nueva Espa\u00f1a": {
                start: "1692-09-14",
                end: "1821-09-27",
            },
            "Pueblo Lands": {
                start: "1680-08-10",
                end: "1692-09-14",
            },
        },
    },
    {
        name: "New York",
        abbreviation: "NY",
        admissionDate: "1788-07-26",
        former_name: "Province of New York",
        postRevolutionName: "State of New York",
        former_names: {
            "New York": {
                start: "1776-01-01",
                end: "1788-07-26",
            },
            "Province of New York ": {
                start: "1664-01-01",
                end: "1776-01-01",
            },
            "New Netherland": {
                start: "1614-01-01",
                end: "1664-01-01",
            },
            "New Haven Colony": {
                start: "1640-01-01",
                end: "1664-01-01",
            },
        },
    },
    {
        name: "North Carolina",
        abbreviation: "NC",
        admissionDate: "1789-11-21",
        former_name: "Province of North Carolina",
        postRevolutionName: "State of North Carolina",
        former_names: {
            "North Carolina": {
                start: "1776-07-04",
                end: "1789-11-21",
            },
            "Province of North Carolina": {
                start: "1729-01-01",
                end: "1776-07-04",
            },
            "Clarendon Province": {
                start: "1669-01-01",
                end: "1729-01-01",
            },
            "Granville District": {
                end: "1776-01-01",
                start: "1729-01-01",
            },
            "Abermarle Province": {
                end: "1729-01-01",
                start: "1669-01-01",
            },
            "Province of Carolina": {
                end: "1669-01-01",
                start: "1663-03-24",
            },
            "Colony of Virginia": {
                end: "1669-01-01",
                start: "1665-01-01",
            },
        },
    },
    {
        name: "North Dakota",
        abbreviation: "ND",
        admissionDate: "1889-11-02",
        former_name: "Dakota Territory",
        former_names: {
            "Dakota Territory": {
                start: "1861-03-02",
                end: "1889-11-02",
            },
            "Nebraska Territory": {
                start: "1854-05-30",
                end: "1867-03-01",
            },
            "Louisiana Territory": {
                start: "1803-04-30",
                end: "1854-05-30",
            },
            "Minnesota Territory": {
                end: "1858-05-11",
                start: "1849-03-03",
            },
            "Iowa Territory": {
                end: "1846-12-28",
                start: "1838-07-04",
            },
            "Wisconsin Territory": {
                end: "1838-07-04",
                start: "1836-07-03",
            },
            "Michigan Territory": {
                end: "1836-07-03",
                start: "1818-12-03",
            },
            "Illinois Territory": {
                end: "1818-12-03",
                start: "1809-03-01",
            },
            "Indiana Territory": {
                end: "1809-03-01",
                start: "1803-04-30",
            },
            "Northwest Territory": {
                start: "1787-07-13",
                end: "1800-07-04",
            },
            "Province of Quebec": {
                end: "1783-07-13",
                start: "1763-01-01",
            },
            "La Louisiane fran\u00e7aise": {
                end: "1803-01-01",
                start: "1717-01-01",
            },
            "Luisiana, Nueva Espa\u00f1a": {
                end: "1800-10-30",
                start: "1762-11-13",
            },
            "la Louisiane fran\u00e7aise, Nouvelle-France": {
                end: "1762-11-12",
                start: "1682-04-09",
            },
            "Pays des Illinois, Nouvelle-France": {
                end: "1717-01-01",
                start: "1673-01-01",
            },
        },
    },
    {
        name: "Ohio",
        abbreviation: "OH",
        admissionDate: "1803-03-01",
        former_name: "Northwest Territory",
        former_names: {
            "Northwest Territory": {
                start: "1783-07-13",
                end: "1803-02-19",
            },
            "Province of Quebec": {
                start: "1763-01-01",
                end: "1783-01-01",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1717-01-01",
                end: "1762-01-01",
            },
            "Pays des Illinois, Nouvelle-France": {
                end: "1717-01-01",
                start: "1673-01-01",
            },
        },
    },
    {
        name: "Oklahoma",
        abbreviation: "OK",
        admissionDate: "1907-11-16",
        former_name: "Oklahoma Territory",
        former_names: {
            "Oklahoma Territory": {
                start: "1890-05-02",
                end: "1907-11-16",
            },
            "Oklahoma Panhandle": {
                end: "1890-05-02",
                start: "1850-09-01",
            },
            "Texas": {
                end: "1850-09-01",
                start: "1845-12-29",
            },
            "Republic of Texas": {
                start: "1836-03-02",
                end: "1845-12-29",
            },
            "Indian Territory": {
                end: "1890-05-02",
                start: "1834-06-30",
            },
            "Unorganized US Territory": {
                end: "1834-06-30",
                start: "1824-11-15",
            },
            "Arkansaw Territory": {
                end: "1824-11-15",
                start: "1819-03-02",
            },
            "Missouri Territory": {
                end: "1819-03-02",
                start: "1812-06-04",
            },
            "Louisiana Territory": {
                end: "1812-06-04",
                start: "1805-07-04",
            },
            "Louisiana Purchase": {
                end: "1805-07-04",
                start: "1803-04-30",
            },
            "La Louisiane fran\u00e7aise": {
                end: "1803-04-30",
                start: "1800-10-30",
            },
            "Luisiana, Nueva Espa\u00f1a": {
                end: "1800-10-30",
                start: "1762-11-13",
            },
            "Estados Unidos Mexicanos": {
                end: "1835-10-23",
                start: "1824-11-01",
            },
            "Imperio Mexicano": {
                start: "1821-09-28",
                end: "1823-03-19",
            },
            "Santa Fe de Nuevo M\u00e9xico, Nueva Espa\u00f1a": {
                end: "1821-09-27",
                start: "1692-09-14",
            },
        },
    },
    {
        name: "Oregon",
        abbreviation: "OR",
        admissionDate: "1859-02-14",
        former_name: "Oregon Territory",
        former_names: {
            "Oregon Territory": {
                start: "1848-08-14",
                end: "1859-02-14",
            },
            "Prov. Gov. of Oregon": {
                end: "1849-03-03",
                start: "1843-05-02",
            },
            "Oregon Country": {
                end: "1843-05-02",
                start: "1821-01-01",
            },
            "Columbia District": {
                end: "1821-01-01",
                start: "1818-01-01",
            },
            "Columbia Department": {
                end: "1818-01-01",
                start: "1813-01-01",
            },
            "Nueva España": {
                start: "1775-01-01",
                end: "1819-01-01",
            },
        },
    },
    {
        name: "Pennsylvania",
        abbreviation: "PA",
        admissionDate: "1787-12-12",
        former_name: "Province of Pennsylvania",
        postRevolutionName: "Commonwealth of Pennsylvania",
        former_names: {
            "Pennsylvania": {
                start: "null",
                end: "1783-09-04",
            },
            "Province of Pennsylvania": {
                start: "1681-03-04",
                end: "1783-09-02",
            },
            "Province of New York": {
                start: "1667-07-21",
                end: "1681-03-05",
            },
            "New Netherland": {
                start: "1614-01-01",
                end: "1667-07-21",
            },
            "New Sweden": {
                start: "1631-01-01",
                end: "1655-01-01",
            },
        },
    },
    {
        name: "Rhode Island",
        abbreviation: "RI",
        admissionDate: "1790-05-29",
        former_name: "Colony of Rhode Island and Providence Plantations",
        postRevolutionName: "State of Rhode Island and Providence Plantations",
        former_names: {
            "Rhode Island and Providence Plantations": {
                start: "1776-07-04",
                end: "1790-05-29",
            },
            "Colony of Rhode Island and Providence Plantations": {
                start: "1663-01-01",
                end: "1776-07-04",
            },
            "Providence Plantations": {
                start: "1636-01-01",
                end: "1663-01-01",
            },
            "Portsmouth": {
                start: "1638-01-01",
                end: "1663-01-01",
            },
            "Pocasset": {
                start: "1637-01-01",
                end: "1638-01-01",
            },
            "Newport": {
                start: "1639-01-01",
                end: "1663-01-01",
            },
            "Warwick": {
                start: "1648-01-01",
                end: "1663-01-01",
            },
            "Shawomet Plantation": {
                start: "1642-01-01",
                end: "1648-01-01",
            },
        },
    },
    {
        name: "South Carolina",
        abbreviation: "SC",
        admissionDate: "1788-05-23",
        former_name: "Province of South Carolina",
        postRevolutionName: "State of South Carolina",
        former_names: {
            "South Carolina": {
                start: "1776-07-04",
                end: "1787-01-01",
            },
            "Province of South Carolina": {
                start: "1712-01-01",
                end: "1776-07-04",
            },
            "Clarendon Province, Carolina": {
                start: "1669-07-21",
                end: "1712-01-01",
            },
            "Province of Carolina": {
                start: "1663-03-24",
                end: "1669-07-21",
            },
        },
    },
    {
        name: "South Dakota",
        abbreviation: "SD",
        admissionDate: "1889-11-02",
        former_name: "Dakota Territory",
        former_names: {
            "Dakota Territory": {
                start: "1861-03-02",
                end: "1889-11-02",
            },
            "Minnesota Territory": {
                start: "1849-03-03",
                end: "1858-05-11",
            },
            "Iowa Territory": {
                start: "1838-07-04",
                end: "1846-12-28",
            },
            "Wisconsin Territory": {
                start: "1836-07-03",
                end: "1838-07-04",
            },
            "Michigan Territory": {
                start: "1818-12-03",
                end: "1836-07-03",
            },
            "Illinois Territory": {
                start: "1809-03-01",
                end: "1818-12-03",
            },
            "Indiana Territory": {
                start: "1803-04-30",
                end: "1809-03-01",
            },
            "Northwest Territory": {
                start: "1783-07-13",
                end: "1800-07-04",
            },
            "Province of Quebec": {
                start: "1763-01-01",
                end: "1783-01-01",
            },
            "Pays des Illinois, Nouvelle-France": {
                start: "1673-01-01",
                end: "1717-01-01",
            },
            "Nebraska Territory": {
                end: "1867-03-01",
                start: "1854-05-30",
            },
            "Louisiana Territory": {
                end: "1854-05-30",
                start: "1803-04-30",
            },
            "La Louisiane fran\u00e7aise": {
                end: "1803-04-30",
                start: "1717-01-01",
            },
            "Luisiana, Nueva Espa\u00f1a": {
                end: "1800-10-30",
                start: "1762-11-13",
            },
            "la Louisiane fran\u00e7aise, Nouvelle-France": {
                end: "1762-11-12",
                start: "1682-04-09",
            },
        },
    },
    {
        name: "Tennessee",
        abbreviation: "TN",
        admissionDate: "1796-06-01",
        former_name: "Southwest Territory",
        former_names: {
            "Southwest Territory": {
                start: "1790-05-26",
                end: "1796-06-01",
            },
            "Republic of Franklin": {
                end: "1788-08-23",
                start: "1784-08-23",
            },
            "Washington District": {
                end: "1784-08-23",
                start: "1776-11-01",
            },
            "Watauga Association": {
                end: "1776-11-01",
                start: "1772-05-01",
            },
            "Indian Reserve": {
                start: "1763-02-10",
                end: "1783-09-03",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1717-01-01",
                end: "1762-11-12",
            },
            "Pays des Illinois, Nouvelle-France": {
                start: "1673-01-01",
                end: "1717-01-01",
            },
        },
    },
    {
        name: "Texas",
        abbreviation: "TX",
        admissionDate: "1845-12-29",
        former_name: "Republic of Texas",
        former_names: {
            "Republic of Texas": {
                start: "1836-03-02",
                end: "1845-12-29",
            },
            "Mexican Texas": {
                end: "1836-03-02",
                start: "1821-09-28",
            },
            "Tejas": {
                end: "1821-09-28",
                start: "1690-09-28",
            },
            "Nueva España": {
                end: "1690-09-28",
                start: "1519-01-01",
            },
            "Comanchería": {
                end: "1750-01-01",
                start: "1835-01-01",
            },
            "Louisiana": {
                end: "1689-01-01",
                start: "1684-01-01",
            },
        },
    },
    {
        name: "Utah",
        abbreviation: "UT",
        admissionDate: "1896-01-04",
        former_name: "Utah Territory",
        former_names: {
            "Utah Territory ": {
                start: "1850-09-09",
                end: "1896-01-04",
            },
            "Las Californias, 2nd Estados Unidos Mexicano": {
                start: "1846-08-22",
                end: "1848-02-02",
            },
            "Las Californias, Rep\u00fablica Centralista de M\u00e9xico. ": {
                start: "1835-10-23",
                end: "1846-08-22",
            },
            "Alta California, 1st Estados Unidos Mexicanos": {
                end: "1835-10-23",
                start: "1824-11-01",
            },
            "Alta California, Imperio Mexicano": {
                end: "1823-03-19",
                start: "1821-09-28",
            },
            "Alta California, Nueva España": {
                end: "1821-09-27",
                start: "1804-01-01",
            },
            "Las Californias, Nueva España": {
                end: "1804-01-01",
                start: "1767-01-01",
            },
            "Nueva España": {
                end: "1767-01-01",
                start: "1519-01-01",
            },
        },
    },
    {
        name: "Vermont",
        abbreviation: "VT",
        admissionDate: "1791-03-04",
        former_name: "Vermont Republic",
        former_names: {
            "Vermont Republic": {
                start: "1777-06-02",
                end: "1791-03-04",
            },
            "Province of New York": {
                start: "1664-01-01",
                end: "1777-01-15",
            },
            "Republic of New Connecticut": {
                start: "1777-01-15",
                end: "1777-06-02",
            },
            "Province of New Hampshire": {
                start: "1741-01-01",
                end: "1764-01-01",
            },
        },
    },
    {
        name: "Virginia",
        abbreviation: "VA",
        admissionDate: "1788-06-25",
        former_name: "Colony of Virginia",
        postRevolutionName: "Commonwealth of Virginia",
        former_names: {
            "Commonwealth of Virginia": {
                start: "1776-06-29",
                end: "1788-06-25",
            },
            "Colony of Virginia": {
                end: "1776-06-29",
                start: "1607-05-01",
            },
            "London Company": {
                start: "1606-01-01",
                end: "1624-01-01",
            },
        },
    },
    {
        name: "Washington",
        abbreviation: "WA",
        admissionDate: "1889-11-11",
        former_name: "Washington Territory",
        former_names: {
            "Washington Territory": {
                start: "1853-03-02",
                end: "1889-11-11",
            },
            "Oregon Territory": {
                start: "1848-08-14",
                end: "1853-03-02",
            },
            "US Prov. Gov. of Oregon": {
                end: "1849-03-03",
                start: "1843-05-02",
            },
            "Columbia Department": {
                start: "1821-01-01",
                end: "1843-05-02",
            },
            "Columbia District": {
                start: "1818-01-01",
                end: "1821-01-01",
            },
            "Nueva España": {
                start: "1775-01-01",
                end: "1819-01-01",
            },
        },
    },
    {
        name: "West Virginia",
        abbreviation: "WV",
        admissionDate: "1863-06-20",
        former_name: "Virginia",
        former_names: {
            "Commonwealth of Virginia": {
                start: "1776-06-29",
                end: "1863-06-20",
            },
            "Colony of Virginia": {
                end: "1776-06-29",
                start: "1607-05-01",
            },
            "London Company": {
                start: "1606-01-01",
                end: "1624-01-01",
            },
        },
    },
    {
        name: "Wisconsin",
        abbreviation: "WI",
        admissionDate: "1848-05-29",
        former_name: "Wisconsin Territory",
        former_names: {
            "Wisconsin Territory ": {
                start: "1836-07-04",
                end: "1848-05-29",
            },
            "Michigan Territory": {
                start: "1818-12-03",
                end: "1836-07-03",
            },
            "Illinois Territory": {
                start: "1809-03-01",
                end: "1818-12-03",
            },
            "Indiana Territory": {
                start: "1803-04-30",
                end: "1809-03-01",
            },
            "Northwest Territory": {
                start: "1783-07-13",
                end: "1800-07-04",
            },
            "Province of Quebec": {
                start: "1763-01-01",
                end: "1783-01-01",
            },
            "La Louisiane fran\u00e7aise": {
                start: "1717-01-01",
                end: "1762-01-01",
            },
            "Pays des Illinois, Nouvelle-France": {
                start: "1673-01-01",
                end: "1717-01-01",
            },
        },
    },
    {
        name: "Wyoming",
        abbreviation: "WY",
        admissionDate: "1890-07-10",
        former_name: "Wyoming Territory",
        former_names: {
            "Wyoming Territory": {
                start: "1868-07-25",
                end: "1890-07-10",
            },
            "Washington Territory": {
                start: "1853-03-02",
                end: "1863-03-02",
            },
            "Oregon Territory": {
                start: "1848-08-14",
                end: "1853-03-02",
            },
            "US Prov. Gov. of Oregon": {
                start: "1849-03-03",
                end: "1843-05-02",
            },
            "Columbia Department": {
                start: "1821-01-01",
                end: "1843-05-02",
            },
            "Columbia District": {
                start: "1818-01-01",
                end: "1821-01-01",
            },
            "Nueva España": {
                start: "1521-01-01",
                end: "1819-01-01",
            },
            "Las Californias, 2nd Estados Unidos Mexicano": {
                end: "1848-02-02",
                start: "1846-08-22",
            },
            "Las Californias, Rep\u00fablica Centralista de M\u00e9xico. ": {
                end: "1846-08-22",
                start: "1835-10-23",
            },
            "Alta California, 1st Estados Unidos Mexicanos": {
                end: "1835-10-23",
                start: "1824-11-01",
            },
            "Alta California, Imperio Mexicano": {
                end: "1823-03-19",
                start: "1821-09-28",
            },
            "Alta California, Nueva Espa\u00f1a": {
                end: "1821-09-27",
                start: "1804-01-01",
            },
            "Las Californias, Nueva Espa\u00f1a": {
                end: "1804-01-01",
                start: "1767-01-01",
            },
            "Idaho Territory": {
                end: "1864-07-03",
                start: "1863-03-02",
            },
            "Dakota Territory": {
                end: "1863-03-02",
                start: "1861-03-02",
            },
            "Nebraska Territory": {
                end: "1861-01-01",
                start: "1854-05-30",
            },
            "Unorganized US Territory": {
                end: "1854-05-30",
                start: "1804-10-01",
            },
            "Louisiana Purchase": {
                end: "1804-10-01",
                start: "1803-04-30",
            },
            "La Louisiane fran\u00e7aise": {
                end: "1803-04-30",
                start: "1800-10-30",
            },
        },
    },
];

export const countriesWithPrecedingPhrases = {
    "France": ["New", "Nouvelle"], // Preceding phrases
    "Guinea": ["Papua New"], // Preceding phrase
    "Spain": ["New", "Nueva"], // Preceding phrases
    "Mexico": ["United States of"], // Full country name
    "Korea": ["North", "South"], // Preceding words within the name
    "Zealand": ["New"], // Preceding phrase
    "Argentina": ["Federative Republic of"], // Preceding phrase
    "Bahamas": ["The Commonwealth of the"], // Preceding phrase
    "Brunei": ["The Sultanate of"], // Preceding phrase
    "China": ["People's Republic of"], // Preceding phrase
    "Congo": ["Democratic Republic of the", "Republic of the"], // Multiple preceding phrases
    "Gambia": ["The Republic of the"], // Preceding phrase
    "Georgia": ["The Republic of"], // Preceding phrase
    "Guinea-Bissau": ["Republic of"], // Full country name
    "Guinea-Conakry": ["Republic of"], // Full country name (alternative to "Guinea")
    "Holy See": ["The Vatican City State of the"], // Full country name
    "India": ["Republic of"], // Preceding phrase
    "Indonesia": ["Republic of"], // Preceding phrase
    "Iran": ["Islamic Republic of"], // Preceding phrase
    "Ireland": ["Republic of", "Northern"], // Multiple preceding phrases
    "Ivory Coast": ["Côte d'Ivoire"], // Alternative country name
    "Kazakhstan": ["Republic of"], // Preceding phrase
    "Kyrgyzstan": ["Kyrgyz Republic"], // Alternative country name
    "Laos": ["People's Democratic Republic of"], // Preceding phrase
    "Macedonia": ["Republic of North Macedonia"], // Full country name
    "Madagascar": ["Republic of"], // Preceding phrase
    "Maldives": ["Republic of the"], // Preceding phrase
    "Mali": ["Republic of"], // Preceding phrase
    "Marshall Islands": ["Republic of the"], // Full country name
    "Mauritania": ["Islamic Republic of"], // Preceding phrase
    "Mauritius": ["Republic of"], // Preceding phrase
    "Micronesia": ["Federated States of"], // Alternative country name
    "Moldova": ["Republic of"], // Preceding phrase
    "Myanmar": ["Republic of the Union of"], // Full country name
    "Namibia": ["Republic of"], // Preceding phrase
    "Netherlands": ["Kingdom of the"], // Full country name
    "Niger": ["Republic of the"], // Preceding phrase
    "Nigeria": ["Federal Republic of"], // Preceding phrase
    "Palau": ["Republic of"], // Full country name
    "Panama": ["Republic of"], // Preceding phrase
    "Papua New Guinea": ["Independent State of"], // Full country name (alternative to "Guinea")
    "Philippines": ["Republic of the"], // Preceding phrase
    "Qatar": ["State of"], // Preceding phrase
    "Rwanda": ["Republic of"], // Preceding phrase
    "São Tomé and Príncipe": ["Democratic Republic of"], // Full country name
    "Saudi Arabia": ["Kingdom of Saudi"], // Preceding phrase
    "Senegal": ["Republic of"], // Preceding phrase
    "Seychelles": ["Republic of the"], // Preceding phrase
    "Sierra Leone": ["Republic of"], // Preceding phrase
    "Singapore": ["Republic of"], // Preceding phrase
    "Slovenia": ["Republic of"], // Preceding phrase
    "Solomon Islands": ["Independent State of the"],
    "South Africa": ["Republic of"], // Preceding phrase
    "Sudan": ["Republic of the"], // Full country name
    "Suriname": ["Republic of"], // Preceding phrase
    "Sweden": ["Kingdom of"], // Preceding phrase
    "Tanzania": ["United Republic of"], // Preceding phrase
    "Thailand": ["Kingdom of"], // Preceding phrase
    "Togo": ["Togolese Republic"], // Alternative country name
    "Tonga": ["Kingdom of"], // Preceding phrase
    "Trinidad and Tobago": ["Republic of Trinidad and Tobago"], // Full country name
    "Tunisia": ["Republic of"], // Preceding phrase
    "Turkey": ["Republic of"], // Preceding phrase
    "Turkmenistan": ["State of"], // Preceding phrase
    "Tuvalu": ["Independent State of Tuvalu"], // Full country name
    "Uganda": ["Republic of"], // Preceding phrase
    "Ukraine": ["State of"], // Preceding phrase
    "United Arab Emirates": ["UAE", "The"], // Multiple preceding phrases
    "United Kingdom": ["UK", "The"], // Multiple preceding phrases
    "United States of America": ["USA", "US", "the US"], // Multiple preceding phrases
    "Uruguay": ["Eastern Republic of"], // Preceding phrase
    "Uzbekistan": ["Republic of"], // Preceding phrase
    "Vanuatu": ["Republic of"], // Preceding phrase
    "Venezuela": ["Bolivarian Republic of"], // Preceding phrase
    "Vietnam": ["Socialist Republic of"], // Preceding phrase
    "Yemen": ["Republic of"], // Preceding phrase
    "Zambia": ["Republic of"], // Preceding phrase
    "Zimbabwe": ["Republic of"], // Preceding phrase
    "Virginia": ["Colony of", "West"], // Preceding phrase
    "New York": ["Province of"], // Preceding phrase
    "Massachusetts Bay": ["Colony of"], // Preceding phrase
    "New Jersey": ["Province of"], // Preceding phrase
    "New Hampshire": ["Province of"], // Preceding phrase
    "New Mexico": ["Province of"], // Preceding phrase
    /* Other old US state names */
    "Georgia": ["Province of"], // Preceding phrase
    "Maryland": ["Province of"], // Preceding phrase
    "North Carolina": ["Province of"], // Preceding phrase
    "South Carolina": ["Province of"], // Preceding phrase
    "Pennsylvania": ["Province of"], // Preceding phrase
    "Rhode Island": ["Colony of"], // Preceding phrase
    "Connecticut": ["Colony of"], // Preceding phrase
    "Delaware": ["Colony of"], // Preceding phrase
};

export const countries = [
    { name: "Afghanistan", nativeName: "افغانستان", date: "1919-08-19" },
    { name: "Albania", nativeName: "Shqipëria", date: "1912-11-28" },
    { name: "Algeria", nativeName: "الجزائر", date: "1962-07-03" },
    { name: "Andorra", nativeName: "Andorra", date: "1278-09-08" },
    { name: "Angola", nativeName: "Angola", date: "1975-11-11" },
    { name: "Antigua and Barbuda", nativeName: "Antigua and Barbuda", date: "1981-11-01" },
    { name: "Argentina", nativeName: "Argentina", date: "1816-07-09" },
    { name: "Armenia", nativeName: "Հայաստան", date: "1991-09-21" },
    { name: "Australia", nativeName: "Australia", date: "1901-01-01" },
    { name: "Austria", nativeName: "Österreich", date: "1955-07-27" },
    { name: "Azerbaijan", nativeName: "Azərbaycan", date: "1991-08-30" },
    { name: "Bahamas", nativeName: "Bahamas", date: "1973-07-10" },
    { name: "Bahrain", nativeName: "البحرين", date: "1971-08-15" },
    { name: "Bangladesh", nativeName: "বাংলাদেশ", date: "1971-03-26" },
    { name: "Barbados", nativeName: "Barbados", date: "1966-11-30" },
    { name: "Belarus", nativeName: "Белару́сь", date: "1991-08-25" },
    { name: "Belgium", nativeName: "België", date: "1830-07-21" },
    { name: "Belize", nativeName: "Belize", date: "1981-09-21" },
    { name: "Benin", nativeName: "Bénin", date: "1960-08-01" },
    { name: "Bhutan", nativeName: "འབྲུག་ཡུལ་", date: "1907-12-17" },
    { name: "Bolivia", nativeName: "Bolivia", date: "1825-08-06" },
    { name: "Bosnia and Herzegovina", nativeName: "Bosna i Hercegovina", date: "1992-03-03" },
    { name: "Botswana", nativeName: "Botswana", date: "1966-09-30" },
    { name: "Brazil", nativeName: "Brasil", date: "1822-09-07" },
    { name: "Brunei", nativeName: "Negara Brunei Darussalam", date: "1984-01-01" },
    { name: "Bulgaria", nativeName: "България", date: "1908-09-22" },
    { name: "Burkina Faso", nativeName: "Burkina Faso", date: "1960-08-05" },
    { name: "Burundi", nativeName: "Burundi", date: "1962-07-01" },
    { name: "Cambodia", nativeName: "កម្ពុជា", date: "1953-11-09" },
    { name: "Cameroon", nativeName: "Cameroon", date: "1960-01-01" },
    { name: "Canada", nativeName: "Canada", date: "1867-07-01" },
    { name: "Cape Verde", nativeName: "Cabo Verde", date: "1975-07-05" },
    { name: "Central African Republic", nativeName: "Ködörösêse tî Bêafrîka", date: "1960-08-13" },
    { name: "Chad", nativeName: "Tchad", date: "1960-08-11" },
    { name: "Chile", nativeName: "Chile", date: "1818-02-12" },
    { name: "China", nativeName: "中国", date: "1949-10-01" },
    { name: "Colombia", nativeName: "Colombia", date: "1810-07-20" },
    { name: "Comoros", nativeName: "Komori", date: "1975-07-06" },
    { name: "Congo (Brazzaville)", nativeName: "Congo-Brazzaville", date: "1960-08-15" },
    { name: "Congo (Kinshasa)", nativeName: "République démocratique du Congo", date: "1960-06-30" },
    { name: "Costa Rica", nativeName: "Costa Rica", date: "1821-09-15" },
    { name: "Croatia", nativeName: "Hrvatska", date: "1991-06-25" },
    { name: "Cuba", nativeName: "Cuba", date: "1902-05-20" },
    { name: "Cyprus", nativeName: "Κύπρος", date: "1960-08-16" },
    { name: "Czech Republic", nativeName: "Česká republika", date: "1993-01-01" },
    { name: "Denmark", nativeName: "Danmark", date: "800-01-01" },
    { name: "Djibouti", nativeName: "Djibouti", date: "1977-06-27" },
    { name: "Dominica", nativeName: "Dominica", date: "1978-11-03" },
    { name: "Dominican Republic", nativeName: "República Dominicana", date: "1844-02-27" },
    { name: "Ecuador", nativeName: "Ecuador", date: "1830-05-24" },
    { name: "Egypt", nativeName: "مصر‎", date: "1953-06-18" },
    { name: "El Salvador", nativeName: "El Salvador", date: "1821-09-15" },
    { name: "England", nativeName: "England", date: "927-10-25" },
    { name: "Equatorial Guinea", nativeName: "Guinea Ecuatorial", date: "1968-10-12" },
    { name: "Eritrea", nativeName: "ኤርትራ", date: "1993-05-24" },
    { name: "Estonia", nativeName: "Eesti", date: "1918-02-24" },
    { name: "Eswatini", nativeName: "Eswatini", date: "1968-09-06" },
    { name: "Ethiopia", nativeName: "ኢትዮጵያ", date: "1941-08-21" },
    { name: "Fiji", nativeName: "Fiji", date: "1970-10-10" },
    { name: "Finland", nativeName: "Suomi", date: "1917-12-06" },
    { name: "France", nativeName: "France", date: "843-08-10" },
    { name: "Gabon", nativeName: "Gabon", date: "1960-08-17" },
    { name: "Gambia", nativeName: "Gambia", date: "1965-02-18" },
    { name: "Georgia", nativeName: "საქართველო", date: "1991-04-09" },
    { name: "Germany", nativeName: "Deutschland", date: "1871-01-18" },
    { name: "Ghana", nativeName: "Ghana", date: "1957-03-06" },
    { name: "Greece", nativeName: "Ελλάδα", date: "1821-03-25" },
    { name: "Grenada", nativeName: "Grenada", date: "1974-02-07" },
    { name: "Guatemala", nativeName: "Guatemala", date: "1821-09-15" },
    { name: "Guinea", nativeName: "Guinée", date: "1958-10-02" },
    { name: "Guinea-Bissau", nativeName: "Guiné-Bissau", date: "1973-09-24" },
    { name: "Guyana", nativeName: "Guyana", date: "1966-05-26" },
    { name: "Haiti", nativeName: "Haïti", date: "1804-01-01" },
    { name: "Honduras", nativeName: "Honduras", date: "1821-09-15" },
    { name: "Hungary", nativeName: "Magyarország", date: "1000-01-01" },
    { name: "Iceland", nativeName: "Ísland", date: "1944-06-17" },
    { name: "India", nativeName: "भारत", date: "1947-08-15" },
    { name: "Indonesia", nativeName: "Indonesia", date: "1945-08-17" },
    { name: "Iran", nativeName: "ایران‎", date: "1935-04-01" },
    { name: "Iraq", nativeName: "العراق‎", date: "1932-10-03" },
    { name: "Ireland", nativeName: "Éire", date: "1922-12-06" },
    { name: "Israel", nativeName: "יִשְׂרָאֵל", date: "1948-05-14" },
    { name: "Italy", nativeName: "Italia", date: "1861-03-17" },
    { name: "Jamaica", nativeName: "Jamaica", date: "1962-08-06" },
    { name: "Japan", nativeName: "日本", date: "660-02-11" },
    { name: "Jordan", nativeName: "الأردن‎", date: "1946-05-25" },
    { name: "Kazakhstan", nativeName: "Қазақстан", date: "1991-12-16" },
    { name: "Kenya", nativeName: "Kenya", date: "1963-12-12" },
    { name: "Kiribati", nativeName: "Kiribati", date: "1979-07-12" },
    { name: "Kuwait", nativeName: "الكويت‎", date: "1961-06-19" },
    { name: "Kyrgyzstan", nativeName: "Кыргызстан", date: "1991-08-31" },
    { name: "Laos", nativeName: "ລາວ", date: "1949-10-22" },
    { name: "Latvia", nativeName: "Latvija", date: "1918-11-18" },
    { name: "Lebanon", nativeName: "لبنان‎", date: "1943-11-26" },
    { name: "Lesotho", nativeName: "Lesotho", date: "1966-10-04" },
    { name: "Liberia", nativeName: "Liberia", date: "1847-07-26" },
    { name: "Libya", nativeName: "ليبيا‎", date: "1951-12-24" },
    { name: "Liechtenstein", nativeName: "Liechtenstein", date: "1806-07-12" },
    { name: "Lithuania", nativeName: "Lietuva", date: "1918-02-16" },
    { name: "Luxembourg", nativeName: "Luxembourg", date: "1839-07-21" },
    { name: "Madagascar", nativeName: "Madagasikara", date: "1960-06-26" },
    { name: "Malawi", nativeName: "Malawi", date: "1964-07-06" },
    { name: "Malaysia", nativeName: "Malaysia", date: "1963-09-16" },
    { name: "Maldives", nativeName: "ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ", date: "1965-07-26" },
    { name: "Mali", nativeName: "Mali", date: "1960-09-22" },
    { name: "Malta", nativeName: "Malta", date: "1964-09-21" },
    { name: "Marshall Islands", nativeName: "Aelōn̄ in M̧ajeļ", date: "1979-10-21" },
    { name: "Mauritania", nativeName: "موريتانيا‎", date: "1960-11-28" },
    { name: "Mauritius", nativeName: "Maurice", date: "1968-03-12" },
    { name: "Mexico", nativeName: "México", date: "1821-09-27" },
    { name: "Micronesia", nativeName: "Micronesia", date: "1986-11-03" },
    { name: "Moldova", nativeName: "Moldova", date: "1991-08-27" },
    { name: "Monaco", nativeName: "Monaco", date: "1861-06-11" },
    { name: "Mongolia", nativeName: "Монгол улс", date: "1921-07-11" },
    { name: "Montenegro", nativeName: "Црна Гора", date: "2006-06-03" },
    { name: "Morocco", nativeName: "المغرب‎", date: "1956-03-02" },
    { name: "Mozambique", nativeName: "Moçambique", date: "1975-06-25" },
    { name: "Myanmar", nativeName: "မြန်မာ", date: "1948-01-04" },
    { name: "Namibia", nativeName: "Namibia", date: "1990-03-21" },
    { name: "Nauru", nativeName: "Nauru", date: "1968-01-31" },
    { name: "Nepal", nativeName: "नेपाल", date: "1768-09-25" },
    { name: "Netherlands", nativeName: "Nederland", date: "1579-01-23" },
    { name: "New Zealand", nativeName: "Aotearoa", date: "1907-09-26" },
    { name: "Nicaragua", nativeName: "Nicaragua", date: "1821-09-15" },
    { name: "Niger", nativeName: "Niger", date: "1960-08-03" },
    { name: "Nigeria", nativeName: "Nigeria", date: "1960-10-01" },
    { name: "North Korea", nativeName: "조선민주주의인민공화국", date: "1948-09-09" },
    { name: "North Macedonia", nativeName: "Северна Македонија", date: "1991-09-08" },
    { name: "Norway", nativeName: "Norge", date: "1905-06-07" },
    { name: "Oman", nativeName: "عمان‎", date: "1971-07-23" },
    { name: "Pakistan", nativeName: "پاکستان‎", date: "1947-08-14" },
    { name: "Palau", nativeName: "Belau", date: "1994-10-01" },
    { name: "Panama", nativeName: "Panamá", date: "1903-11-03" },
    { name: "Papua New Guinea", nativeName: "Papua Niugini", date: "1975-09-16" },
    { name: "Paraguay", nativeName: "Paraguay", date: "1811-05-14" },
    { name: "Peru", nativeName: "Perú", date: "1821-07-28" },
    { name: "Philippines", nativeName: "Pilipinas", date: "1946-07-04" },
    { name: "Poland", nativeName: "Polska", date: "1918-11-11" },
    { name: "Portugal", nativeName: "Portugal", date: "1143-07-26" },
    { name: "Qatar", nativeName: "قطر‎", date: "1971-09-03" },
    { name: "Romania", nativeName: "România", date: "1877-05-09" },
    { name: "Russia", nativeName: "Россия", date: "1991-12-26" },
    { name: "Rwanda", nativeName: "Rwanda", date: "1962-07-01" },
    { name: "Saint Kitts and Nevis", nativeName: "Saint Kitts and Nevis", date: "1983-09-19" },
    { name: "Saint Lucia", nativeName: "Saint Lucia", date: "1979-02-22" },
    { name: "Saint Vincent and the Grenadines", nativeName: "Saint Vincent and the Grenadines", date: "1979-10-27" },
    { name: "Samoa", nativeName: "Samoa", date: "1962-01-01" },
    { name: "San Marino", nativeName: "San Marino", date: "301-09-03" },
    { name: "Sao Tome and Principe", nativeName: "São Tomé e Príncipe", date: "1975-07-12" },
    { name: "Saudi Arabia", nativeName: "العربية السعودية", date: "1932-09-23" },
    { name: "Senegal", nativeName: "Sénégal", date: "1960-04-04" },
    { name: "Serbia", nativeName: "Србија", date: "2006-06-05" },
    { name: "Seychelles", nativeName: "Sesel", date: "1976-06-29" },
    { name: "Sierra Leone", nativeName: "Sierra Leone", date: "1961-04-27" },
    { name: "Singapore", nativeName: "Singapore", date: "1965-08-09" },
    { name: "Slovakia", nativeName: "Slovensko", date: "1993-01-01" },
    { name: "Slovenia", nativeName: "Slovenija", date: "1991-06-25" },
    { name: "Solomon Islands", nativeName: "Solomon Aelan", date: "1978-07-07" },
    { name: "Somalia", nativeName: "Soomaaliya", date: "1960-07-01" },
    { name: "South Africa", nativeName: "South Africa", date: "1910-05-31" },
    { name: "South Sudan", nativeName: "South Sudan", date: "2011-07-09" },
    { name: "Spain", nativeName: "España", date: "1469-01-01" },
    { name: "Sri Lanka", nativeName: "śrī laṃkāva", date: "1948-02-04" },
    { name: "Sudan", nativeName: "السودان‎", date: "1956-01-01" },
    { name: "Suriname", nativeName: "Suriname", date: "1975-11-25" },
    { name: "Sweden", nativeName: "Sverige", date: "1523-06-06" },
    { name: "Switzerland", nativeName: "Schweiz", date: "1291-08-01" },
    { name: "Syria", nativeName: "سوريا‎", date: "1946-04-17" },
    { name: "Taiwan", nativeName: "臺灣", date: "1949-10-25" },
    { name: "Tajikistan", nativeName: "Тоҷикистон", date: "1991-09-09" },
    { name: "Tanzania", nativeName: "Tanzania", date: "1964-12-09" },
    { name: "Thailand", nativeName: "ประเทศไทย", date: "1932-06-24" },
    { name: "Timor-Leste", nativeName: "Timór Lorosa'e", date: "2002-05-20" },
    { name: "Togo", nativeName: "Togo", date: "1960-04-27" },
    { name: "Tonga", nativeName: "Tonga", date: "1970-06-04" },
    { name: "Trinidad and Tobago", nativeName: "Trinidad and Tobago", date: "1962-08-31" },
    { name: "Tunisia", nativeName: "تونس‎", date: "1956-03-20" },
    { name: "Turkey", nativeName: "Türkiye", date: "1923-10-29" },
    { name: "Turkmenistan", nativeName: "Türkmenistan", date: "1991-10-27" },
    { name: "Tuvalu", nativeName: "Tuvalu", date: "1978-10-01" },
    { name: "Uganda", nativeName: "Uganda", date: "1962-10-09" },
    { name: "Ukraine", nativeName: "Україна", date: "1991-08-24" },
    { name: "United Arab Emirates", nativeName: "الإمارات العربية المتحدة", date: "1971-12-02" },
    { name: "United Kingdom", nativeName: "United Kingdom", date: "1801-01-01" },
    { name: "United States of America", nativeName: "United States of America", date: "1776-07-04" },
    { name: "Uruguay", nativeName: "Uruguay", date: "1828-08-27" },
    { name: "Uzbekistan", nativeName: "Oʻzbekiston", date: "1991-08-31" },
    { name: "Vanuatu", nativeName: "Vanuatu", date: "1980-07-30" },
    { name: "Vatican City", nativeName: "Città del Vaticano", date: "1929-02-11" },
    { name: "Venezuela", nativeName: "Venezuela", date: "1830-07-05" },
    { name: "Vietnam", nativeName: "Việt Nam", date: "1945-09-02" },
    { name: "Yemen", nativeName: "اليَمَن‎", date: "1918-10-14" },
    { name: "Zambia", nativeName: "Zambia", date: "1964-10-24" },
    { name: "Zimbabwe", nativeName: "Zimbabwe", date: "1980-04-18" },
];

export const historicalCountries = [
    "Kingdom of Barotseland",
    "Kingdom of Mutapa",
    "Kingdom of Zimbabwe",
    "Kingdom of Butua",
    "Rozvi Empire",
    "Kingdom of Mthwakazi",
    "Ndebele Kingdom",
    "Gaza Empire",
    "Mthethwa Empire",
    "Swellendam",
    "Graaff-Reinet",
    "Zulu Kingdom",
    "South African Republic",
    "Orange Free State",
    "Griqualand East",
    "Nieuwe Republiek",
    "Natalia Republic",
    "State of Goshen",
    "Republic of Stellaland",
    "United States of Stellaland",
    "Republic of Upingtonia",
    "Union of South Africa",
    "Bophuthatswana",
    "Ciskei",
    "Transkei",
    "Venda",
    "Rhodesia",
    "Zimbabwe Rhodesia",
    "Natal",
    "Kingdom of France",
    "Duchy of Brittany",
    "Duchy of Burgundy",
    "French Empire",
    "First French Empire",
    "Second French Empire",
    "Duchy of Normandy",
    "Duchy of Lorraine",
    "Viscounty of Béarn",
    "Free City of Danzig",
    "Duchy of Warsaw",
    "Territory of the Saar Basin",
    "Vichy France",
    "Saar Protectorate",
    "Kingdom of Corsica",
    "Corsican Republic",
    "Anglo-Corsican Kingdom",
    "County of Foix",
    "Free Cities of Menton and Roquebrune",
    "Paris Commune",
    "Modern Germany",
    "Holy Roman Empire",
    "Confederation of the Rhine",
    "Duchy of Anhalt",
    "Principality of Reuss-Gera",
    "Grand Duchy of Frankfurt",
    "German Confederation",
    "German Empire",
    "North German Federation",
    "German Empire",
    "West Berlin , Western Bloc-aligned political enclave.",
    "German Democratic Republic , its states acceded to Federal Republic of Germany in 1990.",
    "Alsace Soviet Republic",
    "Baden",
    "Kingdom of Bavaria",
    "Bavarian Soviet Republic",
    "Bremen",
    // "Brunswick",
    "Frankfurt",
    "Hamburg",
    "Kingdom of Hanover",
    "Hesse-Homburg",
    "Hesse-Kassel",
    "Hohenzollern-Hechingen",
    "Hohenzollern-Sigmaringen",
    "Holstein",
    "Lippe",
    "Lübeck",
    "Mecklenburg-Schwerin",
    "Mecklenburg-Strelitz",
    "Nassau",
    "Oldenburg",
    "Pomerania",
    "Prussia",
    "Duchy of Prussia",
    "Brandenburg-Prussia",
    "Kingdom of Prussia",
    "Reuss",
    "Saxe-Altenburg",
    "Saxe-Coburg-Saalfeld",
    "Saxe-Coburg and Gotha",
    "Saxe-Gotha",
    "Saxe-Hildburghausen",
    "Saxe-Lauenburg",
    "Saxe-Meiningen",
    "Saxe-Weimar-Eisenach",
    "Saxony",
    "Schaumburg-Lippe",
    "Schwarzburg-Rudolstadt",
    "Schwarzburg-Sondershausen",
    "Germany Waldeck",
    "Württemberg",
    "Free State of Bottleneck",
    "Old Swiss Confederacy",
    "Helvetic Republic",
    "Rhodanic Republic",
    "Italy",
    "See also: Historical states of Italy",
    "Republic of Crema",
    "Republic of Alba",
    "Republic of Ancona",
    "Republic of Florence",
    "Kingdom of Naples",
    "Duchy of Urbino",
    "Anconine Republic",
    "Judicate of Arborea",
    "Kingdom of Etruria",
    "United Provinces of Central Italy",
    "Cisalpine Republic",
    "Cispadane Republic",
    "Republic of Cospaia",
    "Principality of Elba",
    "Kingdom of Etruria",
    "Marquisate of Finale",
    "Regency of Carnaro",
    "Gozitan Nation",
    "Italian Republic",
    "Kingdom of Italy",
    "Kingdom of Lombardy–Venetia",
    "Duchy of Lucca",
    "Principality of Lucca and Piombino",
    "Republic of Lucca",
    "Sovereign Military Order of Malta",
    "Duchy of Mantua",
    "Duchy of Massa and Carrara",
    "Duchy of Milan",
    "Provisional Government of Milan",
    "Duchy of Modena",
    "Kingdom of Naples",
    "Republic of Noli",
    "Duchy of Parma",
    "Papal States",
    "Republic of Pisa",
    "Roman Republic",
    "Kingdom of Sardinia",
    "Republic of San Marco",
    "Republic of Senarica",
    "Kingdom of Sicily",
    "Kingdom of Sicily",
    "Italy Transpadane Republic",
    "Grand Duchy of Tuscany",
    "Kingdom of the Two Sicilies",
    "Republic of Venice",
    "Republic of Genoa",
    "Italian protectorate of Albania",
    "Italian governorate of Montenegro",
    "Kingdom of Tavolara",
    "Free Territory of Trieste",
    "Republic of Rose Island",
    "Modern United Kingdom",
    "Kingdom of Gwynedd",
    "Kingdom of Powys",
    "Kingdom of Scotland",
    "England",
    "Angevin Empire",
    "Principality of Wales",
    "Commonwealth of England",
    "The Protectorate",
    "Kingdom of Great Britain",
    "United Kingdom of Great Britain and Ireland",
    "Ireland",
    "Osraige",
    "Airgíalla",
    "Uí Maine",
    "Ailech",
    "Tyrconnell",
    "Tír Eoghain",
    "Fermanagh",
    "Magh Luirg",
    "Republic of Connacht",
    "Thomond",
    "Kingdom of Desmond",
    "Lordship of Ireland",
    "Clandeboye",
    "Kingdom of Uí Failghe",
    "Kingdom of Leinster",
    "Kingdom of Connacht",
    "Kingdom of Ireland",
    "Irish Catholic Confederation",
    "Republic of Connacht",
    "Irish soviets",
    "Limerick Soviet",
    "Benelux",
    "Prince-Bishopric of Liège  annexed by France in 1795.",
    "Duchy of Brabant",
    "Duchy of Bouillon",
    "United Belgian States",
    "Republic of the Seven United Netherlands  Independence from Spain after Eighty Years' War in 1581, conquered by France 1795.",
    "Batavian Republic  France's vassal state.",
    "Kingdom of Holland  Ruled by Louis Bonaparte, annexed by France 1810.",
    "Sovereign Principality of the United Netherlands",
    "United Kingdom of the Netherlands",
    "Neutral Moresnet",
    "Poland",
    "Duchy of Pomerania",
    "Demmin Principality",
    "Szczecin Principality",
    "Duchy of Pomerania-Wolgast",
    "Duchy of Masovia",
    "Duchy of Pomerania-Stolp",
    "Duchy of Pomerania-Neustettin",
    "Duchy of Kraków",
    "Kingdom of Galicia–Volhynia",
    "Duchy of Bytom",
    "Duchy of Silesia",
    "Duchy of Opole",
    "Duchy of Racibórz",
    "Duchy of Opole and Racibórz",
    "Duchy of Inowrocław",
    "Duchy of Teschen",
    "Duchy of Poland",
    "Kingdom of Poland",
    "United Kingdom of Poland",
    "Polish–Lithuanian Commonwealth",
    "Crown of the Kingdom of Poland",
    "Grand Duchy of Lithuania",
    "Royal Prussia",
    "Duchy of Prussia",
    "Duchy of Courland and Semigallia",
    "New Courland",
    "Kingdom of Galicia and Lodomeria",
    "Duchy of Warsaw",
    "Kingdom of Poland",
    "Vistula Land",
    "Grand Duchy of Posen",
    "Grand Duchy of Kraków",
    "Polish National Government",
    "Polish National Government",
    "Polish National Government",
    "Kingdom of Poland",
    "Republic of Zakopane",
    "Republic of Tarnobrzeg",
    "Komancza Republic",
    "Lemko-Rusyn People's Republic",
    "II Republic of Poland",
    "Republic of Central Lithuania",
    "Free City of Danzig",
    "Provisional Polish Revolutionary Committee",
    "Military Administration in Poland",
    "General Governorate for the Occupied Polish Region",
    "Polish Underground State",
    "Polish Committee of National Liberation",
    "Provisional Government of the Republic of Poland",
    "Provisional Government of National Unity",
    "Republic of Poland",
    "Polish People's Republic",
    "Polish National-Territorial Region",
    "Principality of Hungary",
    "Kingdom of Hungary",
    "Eastern Hungarian Kingdom",
    "Principality of Transylvania",
    "Principality of Upper Hungary",
    "Principality of Transylvania",
    "Kingdom of Croatia",
    "Kingdom of Hungary",
    "Hungarian State",
    "Czech Republic and Slovakia",
    "Duchy of Bohemia",
    "Kingdom of Bohemia",
    "Margraviate of Moravia",
    "Slovak Soviet Republic",
    "Slovak Republic",
    "Czechoslovakia First Czechoslovak Republic",
    "Czechoslovakia Second Czechoslovak Republic",
    "Czechoslovakia Third Czechoslovak Republic",
    "Czechoslovakia Czechoslovak Socialist Republic",
    "Czechoslovakia Czech and Slovak Federative Republic",
    "Duchy of Austria",
    "Archduchy of Austria",
    "Austrian Empire",
    "Austria-Hungary",
    "Kingdom of Croatia-Slavonia",
    "Kingdom of Bosnia",
    "Kingdom of Bosnia",
    "Condominium of Bosnia and Herzegovina",
    "Republic of Bosnia and Herzegovina",
    "Autonomous Province of Western Bosnia",
    "Republika Srpska",
    "Croatian Republic of Herzeg-Bosnia",
    "Second Bulgarian Empire",
    "Despotate of Dobruja",
    "Bulgaria Principality of Bulgaria",
    "Strandzha Commune",
    "Kingdom of Croatia",
    "Kingdom of Slavonia",
    "Kingdom of Croatia-Slavonia",
    "Free State of Fiume",
    "Independent State of Croatia",
    "Free Territory of Trieste",
    "Republic of Ragusa",
    "Republic of Serbian Krajina",
    "First Hellenic Republic",
    "Areopagus of Eastern Continental Greece",
    "Kingdom of Greece",
    "United States of the Ionian Islands",
    "Septinsular Republic",
    "Principality of Samos",
    "Cretan State",
    "Free State of Ikaria",
    "Italian Islands of the Aegean",
    "Prince-Bishopric of Montenegro",
    "Principality of Montenegro",
    "Kingdom of Montenegro",
    "Italian governorate of Montenegro",
    "German-occupied territory of Montenegro",
    "Kruševo Republic",
    "Independent Macedonia  [proposed]",
    "Revolutionary Serbia",
    "Principality of Serbia",
    "Kingdom of Serbia",
    "State of Slovenes, Croats and Serbs",
    "Kingdom of Yugoslavia",
    "Socialist Federal Republic of Yugoslavia",
    "Federal Republic of Yugoslavia",
    "Serbia and Montenegro",
    "Republic of Kosova",
    "Byzantine Empire",
    "Duchy of Athens",
    "Despotate of Epirus",
    "Empire of Nicaea",
    "Ottoman Empire",
    "Government of the Grand National Assembly",
    "Emirate of Córdoba",
    "Kingdom of Asturias",
    "Kingdom of León",
    "Republic of Galicia",
    "Couto Misto",
    "Asturian Socialist Republic",
    "Kingdom of Navarre",
    "First Catalan Republic",
    "Revolutionary Catalonia",
    "Second Catalan Republic",
    "Crown of Aragon",
    "Emirate of Granada",
    "Kingdom of Majorca",
    "Principality of Catalonia",
    "United Kingdom of Portugal, Brazil and the Algarves",
    "Kingdom of Portugal",
    "Ditadura Nacional",
    "Crown of Castile",
    "Kingdom of Galicia",
    "Kingdom of Castile",
    "Iberian Union",
    "Republic of Madawaska",
    "Republic of Canada",
    "Republic of Lower Canada",
    "Miꞌkmaꞌki",
    "Republic of Manitoba",
    "Provisional Government of Saskatchewan",
    "Dominion of Newfoundland",
    "Toltec Empire",
    "Cocollán",
    "Aztec Empire",
    "Zapotec civilization",
    "Governing Junta of Mexico",
    "Northern America",
    "First Mexican Empire",
    "Provisional Government of Mexico",
    "First Mexican Republic",
    "Republic of the Rio Grande",
    "Centralist Republic of Mexico",
    "Republic of Yucatán",
    "Second Federal Republic of Mexico",
    "Republic of Sonora",
    "Republic of Baja California",
    "Second Mexican Empire",
    "United States",
    "Iroquois Confederacy",
    "Cherokee Nation",
    "Vermont Republic",
    "State of Muskogee",
    "Republic of West Florida",
    "Republic of East Florida",
    "Republic of the Floridas",
    "Republic of Indian Stream",
    "Republic of Texas",
    "State of Deseret",
    "California Republic",
    "The Great Republic of Rough and Ready",
    "Palmetto Republic",
    "Alabama Republic",
    "Republic of Louisiana",
    "Republic of Georgia",
    "Republic of Mississippi",
    "Confederate States of America",
    "Republic of Puerto Rico",
    "United Provinces of the Río de la Plata",
    "Argentine Confederation",
    "Republic of Entre Ríos",
    "Republic of Tucumán",
    "State of Buenos Aires",
    "Kingdom of Araucanía and Patagonia",
    "State of Upper Peru",
    "Republic of Bolivar",
    "Republic of Alto Perú",
    "Bolivian Republic",
    "Peru-Bolivian Confederation",
    "Brazil",
    "Republic of Acre",
    "Empire of Brazil",
    "Confederation of the Equator",
    "Riograndense Republic",
    "Juliana Republic",
    "Republic of Counani",
    "Principality of Trindad",
    "Kingdom of Chile",
    "New State of Chile",
    "Conservative Republic",
    "Kingdom of Araucania and Patagonia",
    "Muisca Confederation",
    "Free and Independent State of Cundinamarca",
    "Confederate Cities of Valle del Cauca",
    "United Provinces of New Granada",
    "Gran Colombia",
    "State of Quito  Estado de Quito",
    "Free Province of Guayaquil",
    "El Stronato",
    "Kingdom of Chimor",
    "Inca Empire",
    "Protectorate of Peru",
    "Republic of South Peru",
    "Republic of North Peru",
    "Peru-Bolivian Confederation",
    "Peruvian Republic",
    "Peruvian Republic",
    "Federal State of Loreto",
    "Jungle Nation",
    "Governing Junta of Montevideo",
    "Liga Federal",
    "Supreme Junta",
    "First Republic of Venezuela",
    "Second Republic of Venezuela",
    "Third Republic of Venezuela",
    "Puebloan civilisation",
    "Mississippian culture",
    "Iroquois Confederacy",
    "Powhatan Confederacy",
    "Thirteen Colonies",
    "Province of New Hampshire",
    "Province of Massachusetts Bay",
    "Colony of Rhode Island and Providence Plantations",
    "Connecticut Colony",
    "Province of New York",
    "Province of New Jersey",
    "Province of Pennsylvania",
    "Colony of Pennsylvania",
    "Delaware Colony",
    "Province of Maryland",
    "Colony of Virginia",
    "Province of Carolina",
    "Province of North Carolina",
    "Province of South Carolina",
    "Province of Georgia",
    "Vermont Republic",
    "Republic of West Florida",
    "Republic of Indian Stream",
    "Indian Territory",
    "Republic of Texas",
    "California Republic",
    "Hawaiian Kingdom",
    "Republic of Hawaii",
    "New France",
    "Province of Quebec",
    "Provinces of Upper Canada and Lower Canada",
    "United Province of Canada",
    "Rupert's Land",
    "North-Western Territory",
    "Colony of British Columbia",
    "Provisional Government of Saskatchewan",
    "Newfoundland Colony",
    "Dominion of Newfoundland",
];
