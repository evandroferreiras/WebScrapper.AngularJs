var app;
(function (app) {
    var main = angular.module("webScrapperManagement", [
        "ngRoute",
        "common.services",
        "webScrapperItemMock"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/list", {
            templateUrl: "app/views/list.html",
            controller: "ListCtrl as vm"
        })
            .when("/new", {
            templateUrl: "app/views/crud.html",
            controller: "CrudCtrl as vm"
        })
            .when("/edit/:id", {
            templateUrl: "app/views/crud.html",
            controller: "EditCtrl as vm"
        })
            .otherwise("/list");
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map