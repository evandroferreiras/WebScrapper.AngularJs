module app.itemEditCtrl {
    import WebScrapperItemResource = app.services.IWebScrapperItemResource;

    class ItemEditCtrl extends itemCrudCtrl.ItemCrudCtrl {
        constructor( $routeParams: app.models.IItemParams,
             dataAccessService: services.DataAccessService,
             $location : angular.ILocationService,
            $uibModal: ng.ui.bootstrap.IModalService) {
            super($routeParams,dataAccessService, $location, $uibModal);
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