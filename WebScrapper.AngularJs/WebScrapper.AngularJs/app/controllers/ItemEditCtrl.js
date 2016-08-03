var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var itemEditCtrl;
    (function (itemEditCtrl) {
        var ItemEditCtrl = (function (_super) {
            __extends(ItemEditCtrl, _super);
            function ItemEditCtrl($routeParams, dataAccessService, $location) {
                _super.call(this, $routeParams, dataAccessService, $location);
                this.titleWindow = "Edit item";
            }
            return ItemEditCtrl;
        }(app.itemCrudCtrl.ItemCrudCtrl));
        angular
            .module("webScrapperManagement")
            .controller("ItemEditCtrl", ItemEditCtrl);
    })(itemEditCtrl = app.itemEditCtrl || (app.itemEditCtrl = {}));
})(app || (app = {}));
