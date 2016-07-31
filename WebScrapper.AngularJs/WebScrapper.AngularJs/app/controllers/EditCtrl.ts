module app.editCtrl {
    


    class EditCtrl implements crudCtrl.ICrudCtrl {
        titleWindow: string;
        item: models.IWebScrapperItem;

        static $inject = ["$routeParams", "dataAccessService"];

        constructor(
            private $routeParams: crudCtrl.IWebScrapperItemParams,
            private dataAccessService: services.DataAccessService) {

            this.titleWindow = "Edit item";

            var resource = dataAccessService.getWebScrapperItemResource();

            resource.get({ id: $routeParams.id }, (data: models.IWebScrapperItem) => {
                this.item = data;
            });
        }
    }

    angular
        .module("webScrapperManagement")
        .controller("EditCtrl", EditCtrl);
}