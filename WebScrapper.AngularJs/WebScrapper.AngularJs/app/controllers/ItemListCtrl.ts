module app.itemListCtrl {
    interface IItemListCtrl {
        titleWindow: string;
        items: app.models.IItem[];
    }

    class ItemListCtrl implements IItemListCtrl {
        titleWindow: string;
        items: app.models.IItem[];

        static $inject = ["itemService"];
        constructor(private itemService : app.services.ItemService) {
            this.titleWindow = "Listing items";
            
            this.items = [];

            var resource = itemService.getResource();

            resource.query((data: app.models.IItem[]) => {
                this.items = data;
            });
        }
    }

    angular
        .module("webScrapperManagement")
        .controller("ItemListCtrl", ItemListCtrl);

}