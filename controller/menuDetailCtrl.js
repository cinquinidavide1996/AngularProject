app.controller('menuDetailCtrl', function (
        $scope, $routeParams, $http, $timeout, seoSrv) {

    seoSrv.set('Menù prodotti', '', '');
    $http.defaults.cache = CACHE;
    var CategoryID = $routeParams.CategoryID;

    $scope.addToCart = function (ID) {
        $http.post(URL + "/menu/" + ID);
    };

    $scope.get = function (wait) {
        $scope.load = true;
        $http.get(URL + "/menu/" + CategoryID)
                .then(function (xhr) {
                    $scope.data = xhr.data;
                    $timeout(function () {
                        $scope.load = false;
                    }, wait);
                });
    };

    $scope.refresh = function () {
        $http.defaults.cache.remove(URL + "/menu/" + CategoryID);
        $scope.get(500);
    };


    $scope.get(0);
});
