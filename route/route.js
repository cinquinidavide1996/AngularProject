var URL = conn.PROTOCOL + '://' + conn.IP + ':' + conn.PORT;

var app = angular.module("listino", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
            .when("/menu", {
                templateUrl: "template/menu.html",
                controller: "menuCtrl"
            })
            .when("/menu/:CategoryID", {
                templateUrl: "template/menuDetail.html",
                controller: "menuDetailCtrl"
            });
});