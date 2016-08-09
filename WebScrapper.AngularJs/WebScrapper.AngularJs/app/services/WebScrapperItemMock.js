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
            var actions = [];
            var parameters = [];
            parameters = [];
            parameters.push(new app.models.Parameter("query3", "teste3"));
            var action = new app.models.Action(1, "www.site3.com", "POST", parameters);
            actions.push(action);
            item = new app.models.Item(1, "Google", "Robot to query on google web site", actions);
            items.push(item);
            parameters = [];
            parameters.push(new app.models.Parameter("query2", "teste2"));
            var action = new app.models.Action(1, "www.site2.com", "POST", parameters);
            actions.push(action);
            item = new app.models.Item(2, "Americanas", "Robot to query products", actions);
            items.push(item);
            parameters = [];
            parameters.push(new app.models.Parameter("query2", "teste2"));
            var action = new app.models.Action(1, "www.site2.com", "POST", parameters);
            actions.push(action);
            item = new app.models.Item(3, "Submarino", "Robot to query products", actions);
            items.push(item);
            parameters = [];
            parameters.push(new app.models.Parameter("query2", "teste2"));
            var action = new app.models.Action(1, "www.site6.com", "POST", parameters);
            actions.push(action);
            item = new app.models.Item(4, "Facebook", "Robot that automatically likes all the photos", actions);
            items.push(item);
            $httpBackend.whenPUT(/api\/webScrapper\/[0-9]*/).respond(function (method, url, data, headers) {
                var item = angular.extend(new app.models.Item(0, "", "", null), angular.fromJson(data));
                console.log(item);
                if (item.id > 0) {
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].id == item.id) {
                            items[i] = item;
                            break;
                        }
                    }
                }
                return [200, {}, {}];
            });
            $httpBackend.whenPUT(/api/).respond(function (method, url, data, headers) {
                console.log('Received these data:', method, url, data, headers);
                var jsonObj = angular.fromJson(data);
                console.log(jsonObj.id);
                return [200, {}, {}];
            });
            $httpBackend.whenPOST(/api\/webScrapper/).respond(function (method, url, data, headers) {
                var jsonObj = angular.fromJson(data);
                items.push(jsonObj);
                return [200, {}, {}];
            });
            $httpBackend.whenPOST(/api/).respond(function (method, url, data, headers) {
                console.log('Received these data:', method, url, data, headers);
                var jsonObj = angular.fromJson(data);
                console.log(jsonObj.id);
                return [200, {}, {}];
            });
            $httpBackend.whenGET(/api\/webScrapper\/[0-9]*/).respond(function (method, url, data) {
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
                console.log(product);
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
