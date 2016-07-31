module app.listCtrl {
    interface IListCtrl {
        titleWindow: string;
        items: app.models.IWebScrapperItem[];
    }

    class ListCtrl implements IListCtrl {
        titleWindow: string;
        items: app.models.IWebScrapperItem[];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService : app.services.DataAccessService) {
            this.titleWindow = "Listing WebScrappers";
            
            this.items = [];

            var resource = dataAccessService.getWebScrapperItemResource();

            resource.query((data: app.models.IWebScrapperItem[]) => {
                this.items = data;
            });
        }
    }

    angular
        .module("webScrapperManagement")
        .controller("ListCtrl", ListCtrl);

}