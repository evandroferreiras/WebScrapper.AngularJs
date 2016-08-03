var app;
(function (app) {
    var services;
    (function (services) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getWebScrapperItemResource = function () {
                var updateAction = {
                    method: 'PUT',
                    isArray: false
                };
                return this.$resource("api/webScrapper/:id", { id: "@id" }, { update: updateAction });
            };
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        }());
        services.DataAccessService = DataAccessService;
        angular.module("common.services")
            .service("dataAccessService", DataAccessService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
