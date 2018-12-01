var URL = conn.PROTOCOL + '://' + conn.IP + ':' + conn.PORT;

var app = angular.module("listino", ["ngRoute"]);
var cache = undefined;

app.config(function ($routeProvider) {
    $routeProvider
            .when("/menu", {
                templateUrl: "template/menu.html",
                controller: "menuCtrl"
            })
            .when("/menu/:CategoryID", {
                templateUrl: "template/menuDetail.html",
                controller: "menuDetailCtrl"
            })
            .when("/mtg", {
                templateUrl: "template/mtg.html",
                controller: "mtgCtrl"
            });
});

app.run(function ($cacheFactory) {
    cache = $cacheFactory('dataCache', {
        capacity: 10
    });
});