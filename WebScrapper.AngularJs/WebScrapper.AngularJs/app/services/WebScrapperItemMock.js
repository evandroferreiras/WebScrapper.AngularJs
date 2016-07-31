var app;
(function (app) {
    var services;
    (function (services) {
        var mockResource = angular.module("webScrapperItemMock", ["ngMockE2E"]);
        mockResource.run(mockRun);
        mockRun.$inject = ["$httpBackend"];
        function mockRun($httpBackend) {
            var items = [];
            var item;
            item = new app.models.WebScrapperItem(1, "Google", "Robot to query on google web site");
            items.push(item);
            item = new app.models.WebScrapperItem(2, "Americanas", "Robot to query products");
            items.push(item);
            item = new app.models.WebScrapperItem(3, "Submarino", "Robot to query products");
            items.push(item);
            item = new app.models.WebScrapperItem(4, "Facebook", "Robot that automatically likes all the photos");
            items.push(item);
            $httpBackend.whenGET(/api\/webScrapper\/[0-9]*/).respond(function (method, url, data) {
                console.log('teste');
                var product = { "id": 0 };
                var parameters = url.split('/');
                var length = parameters.length;
                var id = +parameters[length - 1];
                if (id > 0) {
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].id == id) {
                            product = items[i];
                            break;
                        }
                    }
                }
                return [200, product, {}];
            });
            $httpBackend.whenGET(/api\/webScrapper/).respond(function (method, url, data) {
                return [200, items, {}];
            });
            // Catch all for testing purposes
            $httpBackend.whenGET(/api/).respond(function (method, url, data) {
                return [200, items, {}];
            });
            // Pass through any requests for application files
            $httpBackend.whenGET(/app/).passThrough();
        }
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=WebScrapperItemMock.js.map