module app.itemNewCtrl {

    class ItemNewCtrl extends itemCrudCtrl.ItemCrudCtrl {

        constructor( $routeParams: app.models.IItemParams,
             dataAccessService: services.DataAccessService,
             $location : angular.ILocationService,
             $uibModal: ng.ui.bootstrap.IModalService) {
            super($routeParams,dataAccessService, $location, $uibModal);
            this.titleWindow = "New item";
            
        }

    }

    angular
        .module("webScrapperManagement")
        .controller("ItemNewCtrl", ItemNewCtrl);
}