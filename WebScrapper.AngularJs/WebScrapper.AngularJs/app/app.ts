
module app {
    var main = angular.module("webScrapperManagement", [
        "ngRoute",
        "common.services",
        "webScrapperItemMock",
        "ui.bootstrap",
        "bootstrap.components"]);

    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider) : void {
        $routeProvider
            .when("/list",
            {
                templateUrl: "app/views/list.html",
                controller: "ItemListCtrl as vm"
            })
            .when("/new",
            {
                templateUrl: "app/views/itemCrud.html",
                controller: "ItemNewCtrl as vm"
            })
            .when("/edit/:id",
            {
                templateUrl: "app/views/itemCrud.html",
                controller: "ItemEditCtrl as vm"
            })
            .otherwise("/list");

    }
}