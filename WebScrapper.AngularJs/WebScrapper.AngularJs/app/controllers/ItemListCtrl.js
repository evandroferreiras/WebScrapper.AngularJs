var app;
(function (app) {
    var itemListCtrl;
    (function (itemListCtrl) {
        var ItemListCtrl = (function () {
            function ItemListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.titleWindow = "Listing WebScrappers";
                this.items = [];
                var resource = dataAccessService.getWebScrapperItemResource();
                resource.query(function (data) {
                    _this.items = data;
                });
            }
            ItemListCtrl.$inject = ["dataAccessService"];
            return ItemListCtrl;
        }());
        angular
            .module("webScrapperManagement")
            .controller("ItemListCtrl", ItemListCtrl);
    })(itemListCtrl = app.itemListCtrl || (app.itemListCtrl = {}));
})(app || (app = {}));
