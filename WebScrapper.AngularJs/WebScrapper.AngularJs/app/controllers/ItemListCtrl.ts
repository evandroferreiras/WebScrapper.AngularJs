module app.itemListCtrl {
    interface IItemListCtrl {
        titleWindow: string;
        items: app.models.IItem[];
        gridOptions : any
    }

    class ItemListCtrl implements IItemListCtrl {
        titleWindow: string;
        items: app.models.IItem[];
        gridOptions : uiGrid.IGridOptions;
        static $inject = ["itemService"];
        constructor(private itemService : app.services.ItemService) {
            
            this.titleWindow = "Listing items";
            
            this.items = [];

            this.gridOptions = {};
            this.gridOptions.columnDefs = [
                {name : 'title',},
                {name : 'description'},
                {name : ' ', cellTemplate:'<a ng-href="#edit/{{row.entity.id}}" > Edit </a>' }
            ];
            

            var resource = itemService.getResource();

            resource.query((data: app.models.IItem[]) => {
                this.items = data;
                this.gridOptions.data = this.items;
            });
        }
    }

    angular
        .module("webScrapperManagement")
        .controller("ItemListCtrl", ItemListCtrl);

}