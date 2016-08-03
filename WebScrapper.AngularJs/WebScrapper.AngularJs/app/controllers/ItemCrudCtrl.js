var app;
(function (app) {
    var itemCrudCtrl;
    (function (itemCrudCtrl) {
        var ItemCrudCtrl = (function () {
            function ItemCrudCtrl($routeParams, dataAccessService, $location) {
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.$location = $location;
                this.resource = dataAccessService.getWebScrapperItemResource();
                this.location = $location;
            }
            ItemCrudCtrl.prototype.save = function () {
                var castItem = this.item;
                if (castItem.id > 0) {
                    this.resource.update(this.item);
                }
                else {
                    this.resource.save(this.item);
                }
                this.alertSuccess();
            };
            ItemCrudCtrl.prototype.alertSuccess = function () {
                this.alerts = [];
                this.alerts.push(new Alerts("success", "Saved with sucess"));
            };
            ItemCrudCtrl.prototype.alertError = function () {
                this.alerts = [];
                this.alerts.push(new Alerts("danger", "Error"));
            };
            ItemCrudCtrl.prototype.closeAlert = function (index) {
                this.alerts.splice(index, 1);
            };
            ;
            ItemCrudCtrl.$inject = ["$routeParams", "dataAccessService", "$location"];
            return ItemCrudCtrl;
        }());
        itemCrudCtrl.ItemCrudCtrl = ItemCrudCtrl;
        var Alerts = (function () {
            function Alerts(type, msg) {
                this.type = type;
                this.msg = msg;
            }
            return Alerts;
        }());
        itemCrudCtrl.Alerts = Alerts;
    })(itemCrudCtrl = app.itemCrudCtrl || (app.itemCrudCtrl = {}));
})(app || (app = {}));
