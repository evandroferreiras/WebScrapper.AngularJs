var app;
(function (app) {
    var itemCrudCtrl;
    (function (itemCrudCtrl) {
        var ItemCrudCtrl = (function () {
            function ItemCrudCtrl($routeParams, dataAccessService, $location, $uibModal) {
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.$location = $location;
                this.$uibModal = $uibModal;
                this.resource = dataAccessService.getWebScrapperItemResource();
                this.location = $location;
            }
            ItemCrudCtrl.prototype.save = function () {
                var castItem = this.item;
                console.log(castItem);
                if (castItem.id > 0) {
                    this.resource.update(this.item);
                }
                else {
                    this.resource.save(this.item);
                }
                this.alertSuccess();
            };
            ItemCrudCtrl.prototype.ParametersEncode = function (parameters) {
                var result = "";
                parameters.forEach(function (p) {
                    result = result.concat(p.name + "=" + p.value + "&");
                });
                if (result == "") {
                    result = "Add parameters";
                }
                return result;
            };
            ItemCrudCtrl.prototype.alertSuccess = function () {
                this.alerts = [];
                this.alerts.push(new app.models.Alert("success", "Saved with sucess"));
            };
            ItemCrudCtrl.prototype.alertError = function () {
                this.alerts = [];
                this.alerts.push(new app.models.Alert("danger", "Error"));
            };
            ItemCrudCtrl.prototype.closeAlert = function (index) {
                this.alerts.splice(index, 1);
            };
            ;
            ItemCrudCtrl.prototype.deleteAction = function (action) {
                var index = this.item.actions.indexOf(action, 0);
                if (index > -1) {
                    this.item.actions.splice(index, 1);
                }
            };
            ItemCrudCtrl.prototype.openModalParameters = function (action) {
                new app.modalParametersEdit.ModalParametersEditParent(this.$uibModal).openModal(action);
            };
            ;
            ItemCrudCtrl.prototype.newActionModal = function () {
                var action = new app.models.Action(0, "", "", []);
                new app.modalCrudAction.ModalCrudActionParent(this.$uibModal).openModal(action, this.item);
            };
            ItemCrudCtrl.prototype.editActionModal = function (action) {
                new app.modalCrudAction.ModalCrudActionParent(this.$uibModal).openModal(action, this.item);
            };
            ItemCrudCtrl.$inject = ["$routeParams", "dataAccessService", "$location", "$uibModal"];
            return ItemCrudCtrl;
        }());
        itemCrudCtrl.ItemCrudCtrl = ItemCrudCtrl;
    })(itemCrudCtrl = app.itemCrudCtrl || (app.itemCrudCtrl = {}));
})(app || (app = {}));
