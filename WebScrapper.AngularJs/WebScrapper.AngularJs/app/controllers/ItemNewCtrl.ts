module app.itemNewCtrl {

    class ItemNewCtrl extends itemCrudCtrl.ItemCrudCtrl {

        constructor( $routeParams: app.models.IItemParams,
             itemService: services.ItemService,
             $location : angular.ILocationService,
             $uibModal: ng.ui.bootstrap.IModalService) {
            super($routeParams,itemService, $location, $uibModal);
            this.titleWindow = "New item";
            
        }

    }

    angular
        .module("webScrapperManagement")
        .controller("ItemNewCtrl", ItemNewCtrl);
}