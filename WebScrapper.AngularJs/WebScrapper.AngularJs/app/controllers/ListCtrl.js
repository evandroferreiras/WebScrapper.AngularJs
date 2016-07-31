var app;
(function (app) {
    var listCtrl;
    (function (listCtrl) {
        var ListCtrl = (function () {
            function ListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.titleWindow = "Listing WebScrappers";
                this.items = [];
                var resource = dataAccessService.getWebScrapperItemResource();
                resource.query(function (data) {
                    _this.items = data;
                });
            }
            ListCtrl.$inject = ["dataAccessService"];
            return ListCtrl;
        }());
        angular
            .module("webScrapperManagement")
            .controller("ListCtrl", ListCtrl);
    })(listCtrl = app.listCtrl || (app.listCtrl = {}));
})(app || (app = {}));
//# sourceMappingURL=ListCtrl.js.map