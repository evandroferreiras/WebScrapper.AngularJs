module app.itemEditCtrl {
    import WebScrapperItemResource = app.services.IWebScrapperItemResource;

    class ItemEditCtrl extends itemCrudCtrl.ItemCrudCtrl {
        constructor( $routeParams: app.models.IWebScrapperItemParams,
             dataAccessService: services.DataAccessService,
             $location : angular.ILocationService) {
            super($routeParams,dataAccessService, $location);
            this.titleWindow = "Edit item";
             this.resource.get({ id: $routeParams.id }, (data: models.IWebScrapperItem) => {
                this.item = data;
            });
        }
    }

    angular
        .module("webScrapperManagement")
        .controller("ItemEditCtrl", ItemEditCtrl);
}