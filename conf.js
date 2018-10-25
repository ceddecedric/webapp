// Base url pour la config multi environnement
var base_url = "";
var base_url_icons = "";
var siteId = "";

if (window.location.href.indexOf("localhost") > -1 || window.location.href.indexOf("127.0.0.1") > -1) {
    base_url = "http://localhost/webapp/";
    base_url_icons = "http://localhost/webapp/";
    siteId = "local";
}