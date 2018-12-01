app.controller('menuDetailCtrl', function ($scope, $rootScope, $routeParams, $http) {

    $rootScope.pageTitle = 'Listino';
    $rootScope.metaDescription = '';
    $rootScope.metaKeywords = '';

    $http.defaults.cache = cache;
    var CategoryID = $routeParams.CategoryID;

    $scope.addToCart = function (ID) {
        $http.post(URL + "/menu/" + ID);
    };

    $scope.get = function () {
        $http.get(URL + "/menu/" + CategoryID)
                .then(function (xhr) {
                    $scope.data = xhr.data;
                });
    };

    $scope.refresh = function () {
        $http.defaults.cache.remove(URL + "/menu/" + CategoryID);
        $scope.get();
    };


    $scope.get();
});
