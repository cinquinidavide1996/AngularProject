app.controller('menuDetailCtrl', function ($scope, $routeParams, $http, seoSrv) {

    seoSrv.set('Menù prodotti', '', '');
    $http.defaults.cache = CACHE;
    var CategoryID = $routeParams.CategoryID;

    $scope.addToCart = function (ID) {
        $http.post(URL + "/menu/" + ID);
    };

    $scope.get = function () {
        $scope.load = true;
        $http.get(URL + "/menu/" + CategoryID)
                .then(function (xhr) {
                    $scope.data = xhr.data;
                    $scope.load = false;
                });
    };

    $scope.refresh = function () {
        $http.defaults.cache.remove(URL + "/menu/" + CategoryID);
        $scope.get();
    };


    $scope.get();
});
