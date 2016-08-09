var app;
(function (app) {
    var modalCrudAction;
    (function (modalCrudAction) {
        var ModalCrudAction = (function () {
            function ModalCrudAction($uibModalInstance, action, item) {
                this.$uibModalInstance = $uibModalInstance;
                this.action = action;
                this.item = item;
                this.newAction = angular.copy(action, this.newAction);
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
            ModalCrudAction.$inject = ["$uibModalInstance", "action", "item"];
            return ModalCrudAction;
        }());
        modalCrudAction.ModalCrudAction = ModalCrudAction;
        var ModalCrudActionParent = (function () {
            function ModalCrudActionParent($uibModal) {
                this.$uibModal = $uibModal;
            }
            ModalCrudActionParent.prototype.openModal = function (action, item) {
                var options = {
                    template: " <div class=\"modal-header\">\n                                    <h3 class=\"modal-title\">Action</h3>\n                                </div>\n                                <form name=\"formAction\" ng-submit=\"c.save()\" role=\"form\">\n                                    <div class=\"modal-body\">\n                                        <div class=\"row\">\n                                                <div class=\"col-md-5\">\n                                                    <bt-input title=\"Url\" ng-model=\"c.newAction.url\" required=true has-placeholder=true ></bt-input>                                            \n                                                </div>\n                                                <div class=\"col-md-5\">\n                                                    <bt-input title=\"HTTP Method\" ng-model=\"c.newAction.httpMethod\" ng-required=true has-placeholder=true ></bt-input>                                                                  \n                                                </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"modal-footer\">\n                                        <button class=\"btn btn-primary\" type=\"submit\" ng-disabled=\"formNewParameter.$invalid\">Save</button>\n                                        <button class=\"btn btn-warning\" type=\"button\" ng-click=\"c.cancel()\">Cancel</button>\n                                    </div>\n                                </form>",
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
