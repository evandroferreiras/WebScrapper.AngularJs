var app;
(function (app) {
    var main = angular.module("webScrapperManagement", [
        "ngRoute",
        "common.services",
        "webScrapperItemMock",
        "ui.bootstrap"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/list", {
            templateUrl: "app/views/list.html",
            controller: "ItemListCtrl as vm"
        })
            .when("/new", {
            templateUrl: "app/views/itemCrud.html",
            controller: "ItemNewCtrl as vm"
        })
            .when("/edit/:id", {
            templateUrl: "app/views/itemCrud.html",
            controller: "ItemEditCtrl as vm"
        })
            .otherwise("/list");
    }
})(app || (app = {}));
