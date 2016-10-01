module app.components{
    export interface IAlert {
        type: string;
        msg: string;
    }

    export class Alert implements IAlert {
        constructor(public type: string, 
                    public msg: string) {
        }
    }
}
