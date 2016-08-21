var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var config;
    (function (config) {
        var ConstantsValues = (function () {
            function ConstantsValues() {
            }
            return ConstantsValues;
        }());
        config.ConstantsValues = ConstantsValues;
        var Constants = (function () {
            function Constants() {
            }
            Object.defineProperty(Constants, "Default", {
                get: function () {
                    var constantsValues = new ConstantsValues();
                    constantsValues.appName = "My App";
                    constantsValues.appVersion = "2.0";
                    constantsValues.apiUrl = 'https://your-api.com/';
                    constantsValues.baseUrl = '/';
                    constantsValues.enableDebug = true;
                    return constantsValues;
                },
                enumerable: true,
                configurable: true
            });
            return Constants;
        }());
        config.Constants = Constants;
    })(config = app.config || (app.config = {}));
})(app || (app = {}));
var app;
(function (app) {
    var main = angular.module("webScrapperManagement", [
        "ngRoute",
        "common.services",
        "webScrapperItemMock",
        "ui.bootstrap",
        "bootstrap.components",
        "ngSanitize",
        "ui.select",
        "ui.grid",
        "ui.grid.edit"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/list", {
            templateUrl: "app/views/list.html",
            controller: "ItemListCtrl as vm",
        })
            .when("/new", {
            templateUrl: "app/views/itemCrud.html",
            controller: "ItemNewCtrl as vm",
        })
            .when("/edit/:id", {
            templateUrl: "app/views/itemCrud.html",
            controller: "ItemEditCtrl as vm"
        })
            .otherwise("/list");
    }
})(app || (app = {}));
var app;
(function (app) {
    var itemCrudCtrl;
    (function (itemCrudCtrl) {
        var ItemCrudCtrl = (function () {
            function ItemCrudCtrl($routeParams, itemService, $location, $uibModal) {
                this.$routeParams = $routeParams;
                this.itemService = itemService;
                this.$location = $location;
                this.$uibModal = $uibModal;
                this.resource = itemService.getResource();
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
                var responseAction = new app.models.ResponseAction([], []);
                var action = new app.models.Action(0, "", "", [], responseAction);
                new app.modalCrudAction.ModalCrudActionParent(this.$uibModal).openModal(action, this.item);
            };
            ItemCrudCtrl.prototype.editActionModal = function (action) {
                new app.modalCrudAction.ModalCrudActionParent(this.$uibModal).openModal(action, this.item);
            };
            ItemCrudCtrl.prototype.openModalResponseAction = function (action) {
                new app.modalResponseAction.ModalResponseActionParent(this.$uibModal).openModal(action.responseAction, action);
            };
            ItemCrudCtrl.$inject = ["$routeParams", "itemService", "$location", "$uibModal"];
            return ItemCrudCtrl;
        }());
        itemCrudCtrl.ItemCrudCtrl = ItemCrudCtrl;
    })(itemCrudCtrl = app.itemCrudCtrl || (app.itemCrudCtrl = {}));
})(app || (app = {}));
var app;
(function (app) {
    var itemEditCtrl;
    (function (itemEditCtrl) {
        var ItemEditCtrl = (function (_super) {
            __extends(ItemEditCtrl, _super);
            function ItemEditCtrl($routeParams, itemService, $location, $uibModal) {
                var _this = this;
                _super.call(this, $routeParams, itemService, $location, $uibModal);
                this.titleWindow = "Edit item";
                this.resource.get({ id: $routeParams.id }, function (data) {
                    _this.item = data;
                });
            }
            return ItemEditCtrl;
        }(app.itemCrudCtrl.ItemCrudCtrl));
        angular
            .module("webScrapperManagement")
            .controller("ItemEditCtrl", ItemEditCtrl);
    })(itemEditCtrl = app.itemEditCtrl || (app.itemEditCtrl = {}));
})(app || (app = {}));
var app;
(function (app) {
    var itemListCtrl;
    (function (itemListCtrl) {
        var ItemListCtrl = (function () {
            function ItemListCtrl(itemService) {
                var _this = this;
                this.itemService = itemService;
                this.titleWindow = "Listing items";
                this.items = [];
                this.gridOptions = {};
                this.gridOptions.columnDefs = [
                    { name: 'title', },
                    { name: 'description' },
                    { name: ' ', cellTemplate: '<a ng-href="#edit/{{row.entity.id}}" > Edit </a>' }
                ];
                var resource = itemService.getResource();
                resource.query(function (data) {
                    _this.items = data;
                    _this.gridOptions.data = _this.items;
                });
            }
            ItemListCtrl.$inject = ["itemService"];
            return ItemListCtrl;
        }());
        angular
            .module("webScrapperManagement")
            .controller("ItemListCtrl", ItemListCtrl);
    })(itemListCtrl = app.itemListCtrl || (app.itemListCtrl = {}));
})(app || (app = {}));
var app;
(function (app) {
    var itemNewCtrl;
    (function (itemNewCtrl) {
        var ItemNewCtrl = (function (_super) {
            __extends(ItemNewCtrl, _super);
            function ItemNewCtrl($routeParams, itemService, $location, $uibModal) {
                _super.call(this, $routeParams, itemService, $location, $uibModal);
                this.titleWindow = "New item";
            }
            return ItemNewCtrl;
        }(app.itemCrudCtrl.ItemCrudCtrl));
        angular
            .module("webScrapperManagement")
            .controller("ItemNewCtrl", ItemNewCtrl);
    })(itemNewCtrl = app.itemNewCtrl || (app.itemNewCtrl = {}));
})(app || (app = {}));
var app;
(function (app) {
    var modalCrudAction;
    (function (modalCrudAction) {
        var ModalCrudAction = (function () {
            function ModalCrudAction($uibModalInstance, action, item, httpMethodsService) {
                var _this = this;
                this.$uibModalInstance = $uibModalInstance;
                this.action = action;
                this.item = item;
                this.httpMethodsService = httpMethodsService;
                this.newAction = angular.copy(action, this.newAction);
                var resource = httpMethodsService.getResource();
                this.httpMethods = [];
                resource.query(function (data) {
                    _this.httpMethods = data;
                });
            }
            ModalCrudAction.prototype.save = function () {
                if (this.newAction.id == 0) {
                    this.newAction.id = this.item.actions.length + 1;
                    this.item.actions.push(this.newAction);
                }
                else {
                    this.action = angular.copy(this.newAction, this.action);
                }
                this.$uibModalInstance.close(this.action);
            };
            ModalCrudAction.prototype.cancel = function () {
                this.$uibModalInstance.dismiss('cancel');
            };
            ModalCrudAction.$inject = ["$uibModalInstance", "action", "item", "httpMethodsService"];
            return ModalCrudAction;
        }());
        modalCrudAction.ModalCrudAction = ModalCrudAction;
        var ModalCrudActionParent = (function () {
            function ModalCrudActionParent($uibModal) {
                this.$uibModal = $uibModal;
            }
            ModalCrudActionParent.prototype.openModal = function (action, item) {
                var options = {
                    template: " <div class=\"modal-header\">\n                                    <h3 class=\"modal-title\">Action</h3>\n                                </div>\n                                <form name=\"formAction\" ng-submit=\"c.save()\" role=\"form\">\n                                    <div class=\"modal-body\">\n                                        <div class=\"row\">\n                                                <div class=\"col-md-5\">                                                    \n                                                    <div ng-class=\"{  'has-error' : formAction.url.$invalid, 'form-group' : true }\">\n\n                                                        <input name=\"url\" type=\"url\" class=\"form-control\" placeholder=\"Url\" ng-model=\"c.newAction.url\" required=true />\n                                                    </div>                                                                               \n                                                </div>\n                                                <div class=\"col-md-5\">\n                                                    <ui-select ng-model=\"c.newAction.httpMethod\" ng-class=\"{'has-error': !c.newAction.httpMethod }\" ng-required=\"true\" theme=\"bootstrap\">\n                                                        <ui-select-match placeholder=\"Select a Http Method\">{{$select.selected.name}}</ui-select-match>\n                                                        <ui-select-choices repeat=\"item.name as item in c.httpMethods | filter: $select.search\">\n                                                            <div ng-bind-html=\"item.name | highlight: $select.search\"></div>\n                                                        </ui-select-choices>\n                                                    </ui-select>                                                                                                                      \n                                                </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"modal-footer\">\n                                        <button class=\"btn btn-primary\" type=\"submit\" ng-disabled=\"formAction.$invalid\">Save</button>\n                                        <button class=\"btn btn-warning\" type=\"button\" ng-click=\"c.cancel()\">Cancel</button>\n                                    </div>\n                                </form>",
                    controller: ModalCrudAction,
                    resolve: { action: function () { return action; },
                        item: function () { return item; } },
                    bindToController: true,
                    controllerAs: 'c'
                };
                this.$uibModal.open(options);
            };
            ModalCrudActionParent.$inject = ["$uibModal"];
            return ModalCrudActionParent;
        }());
        modalCrudAction.ModalCrudActionParent = ModalCrudActionParent;
    })(modalCrudAction = app.modalCrudAction || (app.modalCrudAction = {}));
})(app || (app = {}));
var app;
(function (app) {
    var modalParametersEdit;
    (function (modalParametersEdit) {
        var ModalParametersEdit = (function () {
            function ModalParametersEdit($uibModalInstance, action) {
                var _this = this;
                this.$uibModalInstance = $uibModalInstance;
                this.action = action;
                this.newParameter = new app.models.Parameter("", "");
                this.parameters = [];
                this.action.parameters.forEach(function (element) {
                    _this.parameters.push(element);
                });
            }
            ModalParametersEdit.prototype.add = function () {
                this.parameters.push(this.newParameter);
                this.newParameter = new app.models.Parameter("", "");
            };
            ModalParametersEdit.prototype.save = function () {
                this.action.parameters = this.parameters;
                this.$uibModalInstance.close(this.action);
            };
            ModalParametersEdit.prototype.cancel = function () {
                this.$uibModalInstance.dismiss('cancel');
            };
            ModalParametersEdit.$inject = ["$uibModalInstance", "action"];
            return ModalParametersEdit;
        }());
        modalParametersEdit.ModalParametersEdit = ModalParametersEdit;
        var ModalParametersEditParent = (function () {
            function ModalParametersEditParent($uibModal) {
                this.$uibModal = $uibModal;
            }
            ModalParametersEditParent.prototype.openModal = function (action) {
                var options = {
                    template: " <div class=\"modal-header\">\n                                <h3 class=\"modal-title\">Parameters</h3>\n                            </div>\n                            <div class=\"modal-body\">\n                                <div class=\"row\">\n                                    <form name=\"formNewParameter\" ng-submit=\"c.add()\" role=\"form\">\n                                        <div class=\"col-md-5\">\n                                            <bt-input title=\"Name\" ng-model=\"c.newParameter.name\" required=true has-placeholder=true ></bt-input>                                            \n                                        </div>\n                                        <div class=\"col-md-5\">\n                                            <div class=\"input-group\">\n                                                <bt-input title=\"Value\" ng-model=\"c.newParameter.value\" ng-required=true has-placeholder=true ></bt-input>\n                                                <span class=\"input-group-btn\">\n                                                    <button type=\"submit \" class=\"btn btn-primary\" style=\"\" ng-disabled=\"formNewParameter.$pristine\" >Add</button>\n                                                </span>\n                                            </div>                                                                                                                                                                                                                \n                                        </div>\n                                    </form>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <table class=\" table table-hover \">\n                                            <thead>\n                                                <tr style=\"font-weight: bold \">\n                                                    <td>Name</td>\n                                                    <td>Value</td>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr ng-repeat=\"parameter in c.parameters \">\n                                                    <td>{{parameter.name}}</td>\n                                                    <td>{{parameter.value}}</td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button class=\"btn btn-primary\" type=\"button\" ng-click=\"c.save()\">Save</button>\n                                <button class=\"btn btn-warning\" type=\"button\" ng-click=\"c.cancel()\">Cancel</button>\n                            </div>",
                    controller: 'ModalParametersEdit',
                    resolve: { action: function () { return action; } },
                    bindToController: true,
                    controllerAs: 'c'
                };
                this.$uibModal.open(options);
            };
            ModalParametersEditParent.$inject = ["$uibModal"];
            return ModalParametersEditParent;
        }());
        modalParametersEdit.ModalParametersEditParent = ModalParametersEditParent;
        angular.module('webScrapperManagement').controller('ModalParametersEdit', ModalParametersEdit);
    })(modalParametersEdit = app.modalParametersEdit || (app.modalParametersEdit = {}));
})(app || (app = {}));
var app;
(function (app) {
    var modalResponseAction;
    (function (modalResponseAction) {
        var ModalResponseAction = (function () {
            function ModalResponseAction($uibModalInstance, responseAction, action, resultActionService, typeInformationService) {
                var _this = this;
                this.$uibModalInstance = $uibModalInstance;
                this.responseAction = responseAction;
                this.action = action;
                this.resultActionService = resultActionService;
                this.typeInformationService = typeInformationService;
                this.newResponseAction = angular.copy(responseAction, this.newResponseAction);
                this.gridOptionsIR = {};
                var resultActionResource = resultActionService.getResource();
                resultActionResource.query(function (data) {
                    var values = [];
                    data.forEach(function (element) {
                        values.push({ id: element, name: element.name });
                    });
                    _this.gridOptionsIR.columnDefs = [
                        { name: 'Css Selector', field: 'cssSelector' },
                        {
                            name: 'Result Action',
                            field: 'resultAction',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            cellFilter: 'ComboBoxFilter',
                            editDropdownValueLabel: 'name',
                            editDropdownOptionsArray: values,
                        },
                        { name: 'Result Name', field: 'resultName' }
                    ];
                });
                this.gridOptionsIR.data = this.newResponseAction.informationResults;
                this.gridOptionEI = {};
                var TypeInformationResource = typeInformationService.getResource();
                TypeInformationResource.query(function (data) {
                    var values = [];
                    data.forEach(function (element) {
                        values.push({ id: element, name: element.name });
                    });
                    _this.gridOptionEI.columnDefs = [
                        {
                            name: 'Type Information',
                            field: 'typeInformation',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            cellFilter: 'ComboBoxFilter',
                            editDropdownValueLabel: 'name',
                            editDropdownOptionsArray: values,
                        },
                        { name: 'Css Selector', field: 'cssSelector' }
                    ];
                });
                this.gridOptionEI.data = this.newResponseAction.extractInformations;
            }
            ModalResponseAction.prototype.save = function () {
                this.responseAction = angular.copy(this.newResponseAction, this.responseAction);
                this.$uibModalInstance.close(this.responseAction);
            };
            ModalResponseAction.prototype.cancel = function () {
                this.$uibModalInstance.dismiss('cancel');
            };
            ModalResponseAction.$inject = ["$uibModalInstance", "responseAction", "action", "resultActionService", "typeInformationService"];
            return ModalResponseAction;
        }());
        modalResponseAction.ModalResponseAction = ModalResponseAction;
        var ModalResponseActionParent = (function () {
            function ModalResponseActionParent($uibModal) {
                this.$uibModal = $uibModal;
            }
            ModalResponseActionParent.prototype.openModal = function (responseAction, action) {
                var options = {
                    template: " \n                                <div class=\"modal-header\">\n                                    <h3 class=\"modal-title\">Reponse actions</h3>\n                                </div>                                \n                                <div class=\"modal-body\">\n                                    \n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <div class=\"row\">\n                                                <h4>Extract Information</h4>\n                                            </div>\n                                            <div class=\"row\">                                        \n                                                <div ui-grid=\"c.gridOptionEI\" ui-grid-edit style=\"height: 120px;\"> </div>\n                                            </div>                                                                                        \n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <div class=\"row\">\n                                                <h4>Information Results</h4>\n                                            </div>                                           \n                                            <div class=\"row\">\n                                                <div ui-grid=\"c.gridOptionsIR\" ui-grid-edit style=\"height: 120px;\"> </div>\n                                            </div>                                                                                        \n                                        </div>\n                                    </div>\n                                    \n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button class=\"btn btn-primary\" type=\"submit\" ng-click=\"c.save()\">Save</button>\n                                    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"c.cancel()\">Cancel</button>\n                                </div>",
                    controller: ModalResponseAction,
                    resolve: {
                        responseAction: function () { return responseAction; },
                        action: function () { return action; }
                    },
                    bindToController: true,
                    controllerAs: 'c'
                };
                this.$uibModal.open(options);
            };
            ModalResponseActionParent.$inject = ["$uibModal"];
            return ModalResponseActionParent;
        }());
        modalResponseAction.ModalResponseActionParent = ModalResponseActionParent;
        angular.module('webScrapperManagement').controller("ModalResponseAction", ModalResponseAction);
        angular.module('webScrapperManagement').filter("ComboBoxFilter", function () {
            return function (input) {
                if (!input) {
                    return '';
                }
                else {
                    return input.name;
                }
            };
        });
    })(modalResponseAction = app.modalResponseAction || (app.modalResponseAction = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var Action = (function () {
            function Action(id, url, httpMethod, parameters, responseAction) {
                this.id = id;
                this.url = url;
                this.httpMethod = httpMethod;
                this.parameters = parameters;
                this.responseAction = responseAction;
            }
            return Action;
        }());
        models.Action = Action;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var Alert = (function () {
            function Alert(type, msg) {
                this.type = type;
                this.msg = msg;
            }
            return Alert;
        }());
        models.Alert = Alert;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var ExtractInformation = (function () {
            function ExtractInformation(id, typeInformation, cssSelector) {
                this.id = id;
                this.typeInformation = typeInformation;
                this.cssSelector = cssSelector;
            }
            return ExtractInformation;
        }());
        models.ExtractInformation = ExtractInformation;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var HttpMethods = (function () {
            function HttpMethods(id, name) {
                this.id = id;
                this.name = name;
            }
            return HttpMethods;
        }());
        models.HttpMethods = HttpMethods;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var InformationResult = (function () {
            function InformationResult(id, cssSelector, resultAction, resultName) {
                this.id = id;
                this.cssSelector = cssSelector;
                this.resultAction = resultAction;
                this.resultName = resultName;
            }
            return InformationResult;
        }());
        models.InformationResult = InformationResult;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var Item = (function () {
            function Item(id, title, description, actions) {
                this.id = id;
                this.title = title;
                this.description = description;
                this.actions = actions;
            }
            return Item;
        }());
        models.Item = Item;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var Parameter = (function () {
            function Parameter(name, value) {
                this.name = name;
                this.value = value;
            }
            return Parameter;
        }());
        models.Parameter = Parameter;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var ResponseAction = (function () {
            function ResponseAction(extractInformations, informationResults) {
                this.extractInformations = extractInformations;
                this.informationResults = informationResults;
            }
            return ResponseAction;
        }());
        models.ResponseAction = ResponseAction;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var ResultAction = (function () {
            function ResultAction(id, name) {
                this.id = id;
                this.name = name;
            }
            return ResultAction;
        }());
        models.ResultAction = ResultAction;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var TypeInformation = (function () {
            function TypeInformation(id, name) {
                this.id = id;
                this.name = name;
            }
            return TypeInformation;
        }());
        models.TypeInformation = TypeInformation;
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
            var httpMethods = [];
            var typeInformations = [];
            var resultActions = [];
            var items = [];
            var actions = [];
            var item;
            var parameters = [];
            httpMethods = getHttpMethods();
            typeInformations = getTypeInformations();
            resultActions = getResultActions();
            parameters = [];
            parameters.push(new app.models.Parameter("query3", "teste3"));
            var action = new app.models.Action(1, "www.site3.com", "POST", parameters, getResponseAction());
            actions.push(action);
            item = new app.models.Item(1, "Google", "Robot to query on google web site", actions);
            items.push(item);
            parameters = [];
            parameters.push(new app.models.Parameter("query2", "teste2"));
            var action = new app.models.Action(1, "www.site2.com", "POST", parameters, getResponseAction());
            actions.push(action);
            item = new app.models.Item(2, "Americanas", "Robot to query products", actions);
            items.push(item);
            parameters = [];
            parameters.push(new app.models.Parameter("query2", "teste2"));
            var action = new app.models.Action(1, "www.site2.com", "POST", parameters, getResponseAction());
            actions.push(action);
            item = new app.models.Item(3, "Submarino", "Robot to query products", actions);
            items.push(item);
            parameters = [];
            parameters.push(new app.models.Parameter("query2", "teste2"));
            var action = new app.models.Action(1, "www.site6.com", "POST", parameters, getResponseAction());
            actions.push(action);
            item = new app.models.Item(4, "Facebook", "Robot that automatically likes all the photos", actions);
            items.push(item);
            $httpBackend.whenPUT(/api\/items\/[0-9]*/).respond(function (method, url, data, headers) {
                var item = angular.extend(new app.models.Item(0, "", "", null), angular.fromJson(data));
                console.log('PUT');
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
                console.log('PUT-1');
                var jsonObj = angular.fromJson(data);
                return [200, {}, {}];
            });
            $httpBackend.whenPOST(/api\/items/).respond(function (method, url, data, headers) {
                console.log('POST');
                var jsonObj = angular.fromJson(data);
                items.push(jsonObj);
                return [200, {}, {}];
            });
            $httpBackend.whenPOST(/api/).respond(function (method, url, data, headers) {
                console.log('POST-1');
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
                            product = items[i];
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
        function getHttpMethods() {
            var httpMethods = [];
            httpMethods.push(new app.models.HttpMethods(1, "POST"));
            httpMethods.push(new app.models.HttpMethods(2, "PUT"));
            httpMethods.push(new app.models.HttpMethods(3, "GET"));
            httpMethods.push(new app.models.HttpMethods(4, "DELETE"));
            return httpMethods;
        }
        function getTypeInformations() {
            var typeInformations = [];
            typeInformations.push(new app.models.TypeInformation(1, "Table"));
            typeInformations.push(new app.models.TypeInformation(2, "Element"));
            return typeInformations;
        }
        function getResultActions() {
            var resultActions = [];
            resultActions.push(new app.models.ResultAction(1, "Export to csv"));
            resultActions.push(new app.models.ResultAction(2, "Save to variable"));
            return resultActions;
        }
        function getResponseAction() {
            var result;
            var extractInformations = [];
            var informationResults = [];
            var resultAction = getResultActions()[0];
            console.log(resultAction);
            informationResults.push(new app.models.InformationResult(1, "#teste", resultAction, "text.csv"));
            extractInformations.push(new app.models.ExtractInformation(1, getTypeInformations()[0], "#teste"));
            result = new app.models.ResponseAction(extractInformations, informationResults);
            return result;
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
        var HttpMethodsService = (function () {
            function HttpMethodsService($resource) {
                this.$resource = $resource;
                this.config = app.config.Constants.Default;
            }
            HttpMethodsService.prototype.getResource = function () {
                return this.$resource(this.config.apiUrl + "api/httpmethods/");
            };
            HttpMethodsService.$inject = ["$resource"];
            return HttpMethodsService;
        }());
        services.HttpMethodsService = HttpMethodsService;
        angular.module("common.services")
            .service("httpMethodsService", HttpMethodsService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
var app;
(function (app) {
    var services;
    (function (services) {
        var ItemService = (function () {
            function ItemService($resource) {
                this.$resource = $resource;
                this.config = app.config.Constants.Default;
            }
            ItemService.prototype.getResource = function () {
                var updateAction = {
                    method: 'PUT',
                    isArray: false
                };
                return this.$resource(this.config.apiUrl + "api/items/:id", { id: "@id" }, { update: updateAction });
            };
            ItemService.$inject = ["$resource"];
            return ItemService;
        }());
        services.ItemService = ItemService;
        angular.module("common.services")
            .service("itemService", ItemService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
var app;
(function (app) {
    var services;
    (function (services) {
        var ResultActionService = (function () {
            function ResultActionService($resource) {
                this.$resource = $resource;
                this.config = app.config.Constants.Default;
            }
            ResultActionService.prototype.getResource = function () {
                return this.$resource(this.config.apiUrl + "api/resultactions/");
            };
            ResultActionService.$inject = ["$resource"];
            return ResultActionService;
        }());
        services.ResultActionService = ResultActionService;
        angular.module("common.services")
            .service("resultActionService", ResultActionService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
var app;
(function (app) {
    var services;
    (function (services) {
        var TypeInformationService = (function () {
            function TypeInformationService($resource) {
                this.$resource = $resource;
                this.config = app.config.Constants.Default;
            }
            TypeInformationService.prototype.getResource = function () {
                return this.$resource(this.config.apiUrl + "api/typeinformations/");
            };
            TypeInformationService.$inject = ["$resource"];
            return TypeInformationService;
        }());
        services.TypeInformationService = TypeInformationService;
        angular.module("common.services")
            .service("typeInformationService", TypeInformationService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
