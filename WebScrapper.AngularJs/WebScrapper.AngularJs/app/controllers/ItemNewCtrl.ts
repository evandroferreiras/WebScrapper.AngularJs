module app.itemNewCtrl {

    class ItemNewCtrl extends itemCrudCtrl.ItemCrudCtrl {

        constructor( $routeParams: app.models.IWebScrapperItemParams,
             dataAccessService: services.DataAccessService,
             $location : angular.ILocationService) {
            super($routeParams,dataAccessService, $location);
            this.titleWindow = "New item";
            
        }

    }

    angular
        .module("webScrapperManagement")
        .controller("ItemNewCtrl", ItemNewCtrl);
}