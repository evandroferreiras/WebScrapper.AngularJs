module app.itemEditCtrl {
    

    class ItemEditCtrl extends itemCrudCtrl.ItemCrudCtrl {
        constructor( $routeParams: app.models.IItemParams,
             itemService: services.ItemService,
             $location : angular.ILocationService,
            $uibModal: ng.ui.bootstrap.IModalService) {
            super($routeParams,itemService, $location, $uibModal);
            this.titleWindow = "Edit item";
             this.resource.get({ id: $routeParams.id }, (data: models.IItem) => {
                this.item = data;
            });
        }
    }

    angular
        .module("webScrapperManagement")
        .controller("ItemEditCtrl", ItemEditCtrl);
}