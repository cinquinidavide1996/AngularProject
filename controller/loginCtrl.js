app.controller('loginCtrl', function ($scope, $location, $http, seoSrv) {
    
    seoSrv.set('Login', '', '');

    $scope.login = function() {
        $location.path('/menu');
    };
    
    $scope.load = false;
});