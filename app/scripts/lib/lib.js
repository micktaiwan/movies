function httpGet(theUrl) {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
};

function getFromTitle(title) {
    var omdbData = httpGet("http://www.omdbapi.com/?s=" + title);
    var omdbJSON = eval("(" + omdbData + ")");
    return omdbJSON;
}

function getFromId(id) {
    var omdbData = httpGet("http://www.omdbapi.com/?i=" + id);
    var omdbJSON = eval("(" + omdbData + ")");
    return omdbJSON;
}
