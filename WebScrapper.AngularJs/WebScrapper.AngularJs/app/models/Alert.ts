module app.models{
    export interface IAlert {
        type: string;
        msg: string;
    }

    export class Alert implements IAlert {
        type: string;
        msg: string;

        constructor(type: string, msg: string) {
            this.type = type;
            this.msg = msg;
        }
    }
}
