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
                console.log(this.newParameter);
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
