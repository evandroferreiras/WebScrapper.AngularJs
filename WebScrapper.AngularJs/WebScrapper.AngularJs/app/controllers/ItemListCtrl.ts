module app.itemListCtrl {
    interface IItemListCtrl {
        titleWindow: string;
        items: app.models.IItem[];
    }

    class ItemListCtrl implements IItemListCtrl {
        titleWindow: string;
        items: app.models.IItem[];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService : app.services.DataAccessService) {
            this.titleWindow = "Listing WebScrappers";
            
            this.items = [];

            var resource = dataAccessService.getWebScrapperItemResource();

            resource.query((data: app.models.IItem[]) => {
                this.items = data;
            });
        }
    }

    angular
        .module("webScrapperManagement")
        .controller("ItemListCtrl", ItemListCtrl);

}