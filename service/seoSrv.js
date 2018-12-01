app.service('seoSrv', function ($rootScope) {
    this.set = function (title, description, keywords) {
        $rootScope.pageTitle = title;
        $rootScope.metaDescription = description;
        $rootScope.metaKeywords = keywords;
    };

    this.updateTitle = function (title) {
        $rootScope.pageTitle = title;
    };
    this.updateDescription = function (description) {
        $rootScope.metaDescription = description;
    };
    this.updateKeywords = function (keywords) {
        $rootScope.metaKeywords = keywords;
    };

});