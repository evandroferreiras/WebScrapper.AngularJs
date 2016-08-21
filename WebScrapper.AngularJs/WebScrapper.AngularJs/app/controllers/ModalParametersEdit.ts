module app.modalParametersEdit {

    export interface IModalParametersEdit {
        newParameter: app.models.IParameter;
        parameters : app.models.IParameter[];
        action: app.models.IAction;
        add(): void;
        save(): void;
        cancel(): void;
    }

    export class ModalParametersEdit implements IModalParametersEdit {
        public newParameter: app.models.Parameter;
        public parameters : app.models.IParameter[];


        static $inject = ["$uibModalInstance", "action"];
        constructor(private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance,
            public action: app.models.IAction) {
            this.newParameter = new app.models.Parameter("", "");
            this.parameters = [];
            this.action.parameters.forEach(element => {
                this.parameters.push(element);    
            });
            
        }
        add(): void {
            
            this.parameters.push(this.newParameter);
            this.newParameter = new app.models.Parameter("", "");
        }
        save(): void {
            this.action.parameters = this.parameters;
            this.$uibModalInstance.close(this.action);
        }

        cancel(): void {
            this.$uibModalInstance.dismiss('cancel');
        }        
    }

    export class ModalParametersEditParent {

        static $inject = ["$uibModal"];
        constructor(private $uibModal: ng.ui.bootstrap.IModalService) {}    

        openModal(action: app.models.IAction){
            var options: ng.ui.bootstrap.IModalSettings =
                {
                    template: ` <div class="modal-header">
                                <h3 class="modal-title">Parameters</h3>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <form name="formNewParameter" ng-submit="c.add()" role="form">
                                        <div class="col-md-5">
                                            <bt-input title="Name" ng-model="c.newParameter.name" required=true has-placeholder=true ></bt-input>                                            
                                        </div>
                                        <div class="col-md-5">
                                            <div class="input-group">
                                                <bt-input title="Value" ng-model="c.newParameter.value" ng-required=true has-placeholder=true ></bt-input>
                                                <span class="input-group-btn">
                                                    <button type="submit " class="btn btn-primary" style="" ng-disabled="formNewParameter.$pristine" >Add</button>
                                                </span>
                                            </div>                                                                                                                                                                                                                
                                        </div>
                                    </form>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <table class=" table table-hover ">
                                            <thead>
                                                <tr style="font-weight: bold ">
                                                    <td>Name</td>
                                                    <td>Value</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr ng-repeat="parameter in c.parameters ">
                                                    <td>{{parameter.name}}</td>
                                                    <td>{{parameter.value}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-primary" type="button" ng-click="c.save()">Save</button>
                                <button class="btn btn-warning" type="button" ng-click="c.cancel()">Cancel</button>
                            </div>`,
                    controller: 'ModalParametersEdit',
                    resolve: { action: () => action },
                    bindToController: true,
                    controllerAs: 'c'
                };

            this.$uibModal.open(options);
        }
    }

    angular.module('webScrapperManagement').controller('ModalParametersEdit', ModalParametersEdit);
}