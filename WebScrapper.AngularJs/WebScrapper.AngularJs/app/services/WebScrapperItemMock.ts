

module app.services {
    var mockResource = angular.module("webScrapperItemMock", ["ngMockE2E"]);

    mockResource.run(mockRun);

    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService): void {

        var items: app.models.IWebScrapperItem[] = [];
        var item: app.models.IWebScrapperItem;

        item = new app.models.WebScrapperItem(1, "Google", "Robot to query on google web site");
        items.push(item);
        item = new app.models.WebScrapperItem(2, "Americanas", "Robot to query products");
        items.push(item);
        item = new app.models.WebScrapperItem(3, "Submarino", "Robot to query products");
        items.push(item);
        item = new app.models.WebScrapperItem(4, "Facebook", "Robot that automatically likes all the photos");
        items.push(item);

        $httpBackend.whenPUT(/api\/webScrapper\/[0-9]*/).respond(function (method, url, data: string, headers) {
            var jsonObj = angular.fromJson(data);
            if (jsonObj.id > 0) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id == jsonObj.id) {
                        items[i] = jsonObj;
                        break;
                    }
                }
            }
            return [200, {}, {}];
        });

        $httpBackend.whenPUT(/api/).respond(function (method, url, data: string, headers) {
            console.log('Received these data:', method, url, data, headers);
            var jsonObj = angular.fromJson(data);
            console.log(jsonObj.id);

            return [200, {}, {}];
        });


        $httpBackend.whenPOST(/api\/webScrapper/).respond(function (method, url, data: string, headers) {
            var jsonObj = angular.fromJson(data);
            items.push(jsonObj);
            return [200, {}, {}];
        });

        $httpBackend.whenPOST(/api/).respond(function (method, url, data: string, headers) {
            console.log('Received these data:', method, url, data, headers);
            var jsonObj = angular.fromJson(data);
            console.log(jsonObj.id);
            return [200, {}, {}];
        });




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

}