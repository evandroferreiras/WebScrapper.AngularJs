var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var itemNewCtrl;
    (function (itemNewCtrl) {
        var ItemNewCtrl = (function (_super) {
            __extends(ItemNewCtrl, _super);
            function ItemNewCtrl($routeParams, dataAccessService, $location, $uibModal) {
                _super.call(this, $routeParams, dataAccessService, $location, $uibModal);
                this.titleWindow = "New item";
            }
            return ItemNewCtrl;
        }(app.itemCrudCtrl.ItemCrudCtrl));
        angular
            .module("webScrapperManagement")
            .controller("ItemNewCtrl", ItemNewCtrl);
    })(itemNewCtrl = app.itemNewCtrl || (app.itemNewCtrl = {}));
})(app || (app = {}));
