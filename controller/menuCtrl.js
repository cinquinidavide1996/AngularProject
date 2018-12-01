app.controller('menuCtrl', function ($scope, $location, $http) {
    $http.defaults.cache = cache;

    $scope.detail = function (ID) {
        $location.path('/menu/' + ID);
    };

    $scope.get = function () {
        $http.get(URL + "/menu")
                .then(function (xhr) {
                    $scope.data = xhr.data;
                });
    };

    $scope.refresh = function () {
        $http.defaults.cache.remove(URL + "/menu");
        $scope.get();
    };

    $scope.get();

});