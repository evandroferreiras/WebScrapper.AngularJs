var app;
(function (app) {
    var editCtrl;
    (function (editCtrl) {
        var EditCtrl = (function () {
            function EditCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.titleWindow = "Edit item";
                var resource = dataAccessService.getWebScrapperItemResource();
                resource.get({ id: $routeParams.id }, function (data) {
                    _this.item = data;
                });
            }
            EditCtrl.$inject = ["$routeParams", "dataAccessService"];
            return EditCtrl;
        }());
        angular
            .module("webScrapperManagement")
            .controller("EditCtrl", EditCtrl);
    })(editCtrl = app.editCtrl || (app.editCtrl = {}));
})(app || (app = {}));
//# sourceMappingURL=EditCtrl.js.map