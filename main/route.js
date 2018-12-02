app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "template/login.html",
                controller: "loginCtrl"
            })
            .when("/menu", {
                templateUrl: "template/menu.html",
                controller: "menuCtrl"
            })
            .when("/menu/:CategoryID", {
                templateUrl: "template/menuDetail.html",
                controller: "menuDetailCtrl"
            });
});