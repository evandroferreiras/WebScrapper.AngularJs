module app.components.bootstrap {
    export interface IbootstrapInputModel {
        title: string;
        req : boolean;
        value: string;
        hasError() : boolean;
    }

    export class bootstrapInputCtrl implements IbootstrapInputModel {

        title: string;
        req: boolean;
        value: string;

        hasError(): boolean {

            return (this.req.toString().toLowerCase() === 'true' && !this.value);
        }
    };
}