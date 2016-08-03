var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var main = angular.module("webScrapperManagement", [
        "ngRoute",
        "common.services",
        "webScrapperItemMock",
        "ui.bootstrap"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/list", {
            templateUrl: "app/views/list.html",
            controller: "ListCtrl as vm"
        })
            .when("/new", {
            templateUrl: "app/views/crud.html",
            controller: "CrudCtrl as vm"
        })
            .when("/edit/:id", {
            templateUrl: "app/views/crud.html",
            controller: "EditCtrl as vm"
        })
            .otherwise("/list");
    }
})(app || (app = {}));
var app;
(function (app) {
    var components;
    (function (components) {
        var bootstrap;
        (function (bootstrap) {
            var input;
            (function (input) {
                angular.module('webScrapperManagement')
                    .component("bootstrapInput", {
                    templateUrl: "app/components/bootstrap.input.html",
                    controller: bootstrap.bootstrapInputCtrl,
                    bindings: {
                        title: "@",
                        value: "=",
                        req: "@"
                    }
                });
            })(input = bootstrap.input || (bootstrap.input = {}));
        })(bootstrap = components.bootstrap || (components.bootstrap = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
var app;
(function (app) {
    var components;
    (function (components) {
        var bootstrap;
        (function (bootstrap) {
            var bootstrapInputCtrl = (function () {
                function bootstrapInputCtrl() {
                }
                bootstrapInputCtrl.prototype.hasError = function () {
                    return (this.req.toString().toLowerCase() === 'true' && !this.value);
                };
                return bootstrapInputCtrl;
            }());
            bootstrap.bootstrapInputCtrl = bootstrapInputCtrl;
            ;
        })(bootstrap = components.bootstrap || (components.bootstrap = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
var app;
(function (app) {
    var components;
    (function (components) {
        var bootstrap;
        (function (bootstrap) {
            var textarea;
            (function (textarea) {
                angular.module('webScrapperManagement')
                    .component("bootstrapTextarea", {
                    templateUrl: "app/components/bootstrap.textarea.html",
                    controller: bootstrap.bootstrapInputCtrl,
                    bindings: {
                        title: "@",
                        value: "=",
                        req: "@"
                    }
                });
            })(textarea = bootstrap.textarea || (bootstrap.textarea = {}));
        })(bootstrap = components.bootstrap || (components.bootstrap = {}));
    })(components = app.components || (app.components = {}));
})(app || (app = {}));
var app;
(function (app) {
    var crudCtrl;
    (function (crudCtrl) {
        var CrudCtrl = (function () {
            function CrudCtrl() {
            }
            CrudCtrl.prototype.save = function () { };
            CrudCtrl.prototype.alertSuccess = function () {
                this.alerts = [];
                this.alerts.push(new Alerts("success", "Saved with sucess"));
            };
            CrudCtrl.prototype.alertError = function () {
                this.alerts = [];
                this.alerts.push(new Alerts("danger", "Error"));
            };
            CrudCtrl.prototype.closeAlert = function (index) {
                this.alerts.splice(index, 1);
            };
            ;
            return CrudCtrl;
        }());
        crudCtrl.CrudCtrl = CrudCtrl;
        var Alerts = (function () {
            function Alerts(type, msg) {
                this.type = type;
                this.msg = msg;
            }
            return Alerts;
        }());
        crudCtrl.Alerts = Alerts;
    })(crudCtrl = app.crudCtrl || (app.crudCtrl = {}));
})(app || (app = {}));
var app;
(function (app) {
    var editCtrl;
    (function (editCtrl) {
        var EditCtrl = (function (_super) {
            __extends(EditCtrl, _super);
            function EditCtrl($routeParams, dataAccessService) {
                var _this = this;
                _super.call(this);
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.titleWindow = "Edit item";
                this.resource = dataAccessService.getWebScrapperItemResource();
                this.resource.get({ id: $routeParams.id }, function (data) {
                    _this.item = data;
                });
            }
            EditCtrl.prototype.save = function () {
                this.resource.save(this.item);
                this.alertSuccess();
            };
            EditCtrl.$inject = ["$routeParams", "dataAccessService"];
            return EditCtrl;
        }(app.crudCtrl.CrudCtrl));
        angular
            .module("webScrapperManagement")
            .controller("EditCtrl", EditCtrl);
    })(editCtrl = app.editCtrl || (app.editCtrl = {}));
})(app || (app = {}));
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
var app;
(function (app) {
    var models;
    (function (models) {
        var WebScrapperItem = (function () {
            function WebScrapperItem(id, title, description) {
                this.id = id;
                this.title = title;
                this.description = description;
            }
            return WebScrapperItem;
        }());
        models.WebScrapperItem = WebScrapperItem;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
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
            $httpBackend.whenPOST(/api\/webScrapper/).respond(function (method, url, data, headers) {
                console.log('Received these data:', method, url, data, headers);
                console.log(angular.fromJson(data));
                items.push(angular.fromJson(data));
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
            $httpBackend.whenGET(/api/).respond(function (method, url, data) {
                return [200, items, {}];
            });
            $httpBackend.whenGET(/app/).passThrough();
        }
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
var app;
(function (app) {
    var services;
    (function (services) {
        angular.module("common.services", ["ngResource"]);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
var app;
(function (app) {
    var services;
    (function (services) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getWebScrapperItemResource = function () {
                return this.$resource("api/webScrapper/:id");
            };
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        }());
        services.DataAccessService = DataAccessService;
        angular.module("common.services")
            .service("dataAccessService", DataAccessService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=tsc.js.map