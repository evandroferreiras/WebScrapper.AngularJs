

module app.services {
    var mockResource = angular.module("webScrapperItemMock", ["ngMockE2E"]);

    mockResource.run(mockRun);

    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService): void {
        var httpMethods : models.IHttpMethods[] = [];
        var typeInformations : models.ITypeInformation[] = [];
        var resultActions : models.IResultAction[] = [];
        var items: models.IItem[] = [];
        var actions : models.IAction[] = [];
        var item: models.IItem;

        var parameters : models.IParameter[] = [];
        httpMethods = getHttpMethods();                
        typeInformations = getTypeInformations();
        resultActions = getResultActions();
                            
        parameters = [];

        parameters.push(new models.Parameter("query3", "teste3"));
        var action = new models.Action(1, "www.site3.com", "POST", parameters,getResponseAction());
        actions.push(action);
        item = new models.Item(1, "Google", "Robot to query on google web site", actions);
        items.push(item);
        parameters = [];
        parameters.push(new models.Parameter("query2", "teste2"));
        var action = new models.Action(1, "www.site2.com", "POST", parameters,getResponseAction());
        actions.push(action);
        item = new models.Item(2, "Americanas", "Robot to query products", actions);
        items.push(item);
        parameters = [];
        parameters.push(new models.Parameter("query2", "teste2"));
        var action = new models.Action(1, "www.site2.com", "POST", parameters,getResponseAction());
        actions.push(action);
        item = new models.Item(3, "Submarino", "Robot to query products", actions);
        items.push(item);
        parameters = [];
        parameters.push(new models.Parameter("query2", "teste2"));
        var action = new models.Action(1, "www.site6.com", "POST", parameters,getResponseAction());
        actions.push(action);        
        item = new models.Item(4, "Facebook", "Robot that automatically likes all the photos", actions);
        items.push(item);



        $httpBackend.whenPUT(/api\/items\/[0-9]*/).respond(function (method, url, data: string, headers) {            
            var item = angular.extend(new models.Item(0,"","", null),angular.fromJson(data) );   

            console.log('PUT') 
            
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

        $httpBackend.whenPUT(/api/).respond(function (method, url, data: string, headers) {
            console.log('PUT-1')
            var jsonObj = angular.fromJson(data);
            

            return [200, {}, {}];
        });


        $httpBackend.whenPOST(/api\/items/).respond(function (method, url, data: string, headers) {
            console.log('POST')
            var jsonObj = angular.fromJson(data);
            items.push(<models.IItem>jsonObj);
            return [200, {}, {}];
        });

        $httpBackend.whenPOST(/api/).respond(function (method, url, data: string, headers) {
            console.log('POST-1')
            var jsonObj = angular.fromJson(data);
            
            return [200, {}, {}];
        });

        $httpBackend.whenGET(/api\/items\/[0-9]*/).respond(function (method, url, data) {
            
            var product = { "id": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = +parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id == id) {
                        product = <models.IItem>items[i];
                        break;
                    }
                }
            }
            
            return [200, product, {}];
        });

        $httpBackend.whenGET(/api\/items/).respond(function (method, url, data) {
            console.log(items);
            return [200, items, {}];
        });

        $httpBackend.whenGET(/api\/httpmethods/).respond(function (method, url, data) {

            return [200, httpMethods, {}];
        });

        $httpBackend.whenGET(/api\/typeinformations/).respond(function (method, url, data) {

            return [200, typeInformations, {}];
        });

        $httpBackend.whenGET(/api\/resultactions/).respond(function (method, url, data) {
            console.log(resultActions);
            return [200, resultActions, {}];
        });


        // Catch all for testing purposes
        $httpBackend.whenGET(/api/).respond(function (method, url, data) {

            return [200, items, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();

    }

    function getHttpMethods() : models.IHttpMethods[] {
        var httpMethods : models.IHttpMethods[] = [];
        httpMethods.push(new models.HttpMethods(1,"POST"));
        httpMethods.push(new models.HttpMethods(2,"PUT"));
        httpMethods.push(new models.HttpMethods(3,"GET"));
        httpMethods.push(new models.HttpMethods(4,"DELETE"));

        return httpMethods;
    }

    function getTypeInformations() : models.ITypeInformation[] {
        
        var typeInformations : models.ITypeInformation[] = [];
        typeInformations.push(new models.TypeInformation("1","Table"));
        typeInformations.push(new models.TypeInformation("2","Element"));
        return typeInformations;
    }

    function getResultActions() : models.IResultAction[] {
        var resultActions : models.IResultAction[] = [];
        resultActions.push(new models.ResultAction(1,"Export to csv"));
        resultActions.push(new models.ResultAction(2,"Save to variable"));
        return resultActions;
    }

    function getResponseAction() : models.IResponseAction{
        var result : models.IResponseAction;
        var extractInformations : models.IExtractInformation[] = [];
        var informationResults : models.IInformationResult[] = [];
        
        var resultAction = getResultActions()[0];
        console.log(resultAction);

        informationResults.push(new models.InformationResult(1,"#teste",resultAction,"text.csv"));
        extractInformations.push(new models.ExtractInformation(1,getTypeInformations()[0],"#teste"));

        result = new models.ResponseAction(extractInformations,informationResults);
        return result;
    }
}