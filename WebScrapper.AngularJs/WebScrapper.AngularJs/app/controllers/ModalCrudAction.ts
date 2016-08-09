module app.modalCrudAction {
    export interface IModalCrudAction {
        
        action : app.models.IAction;
        item : app.models.IItem;
        newAction : app.models.IAction;
        save() : void;
        cancel() : void;
    }

    export class ModalCrudAction implements IModalCrudAction{
        public newAction : app.models.IAction;
        static $inject = ["$uibModalInstance", "action", "item"];
        constructor(private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance,
            public action: app.models.IAction,
            public item : app.models.IItem) {

            this.newAction = angular.copy(action,this.newAction)
            
        }

        save() : void{
            if (this.newAction.id == 0){
                this.newAction.id = this.item.actions.length +1;
                this.item.actions.push(this.newAction)
            }else{
                this.action= angular.copy(this.newAction,this.action);
            }
            
            this.$uibModalInstance.close(this.action);
        }

        cancel() : void{
            this.$uibModalInstance.dismiss('cancel');
        }
    }

    export class ModalCrudActionParent {
        static $inject = ["$uibModal"];
        constructor(private $uibModal: ng.ui.bootstrap.IModalService) {}  
        
        openModal(action : app.models.IAction, item: app.models.IItem){
            var options: ng.ui.bootstrap.IModalSettings =
                {
                    template: ` <div class="modal-header">
                                    <h3 class="modal-title">Action</h3>
                                </div>
                                <form name="formAction" ng-submit="c.save()" role="form">
                                    <div class="modal-body">
                                        <div class="row">
                                                <div class="col-md-5">
                                                    <bt-input title="Url" ng-model="c.newAction.url" required=true has-placeholder=true ></bt-input>                                            
                                                </div>
                                                <div class="col-md-5">
                                                    <bt-input title="HTTP Method" ng-model="c.newAction.httpMethod" ng-required=true has-placeholder=true ></bt-input>                                                                  
                                                </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn btn-primary" type="submit" ng-disabled="formNewParameter.$invalid">Save</button>
                                        <button class="btn btn-warning" type="button" ng-click="c.cancel()">Cancel</button>
                                    </div>
                                </form>`,
                    controller: ModalCrudAction,
                    resolve: { action: () => action,
                            item: () => item },
                    bindToController: true,
                    controllerAs: 'c'
                }
                this.$uibModal.open(options);
        }
    }
}