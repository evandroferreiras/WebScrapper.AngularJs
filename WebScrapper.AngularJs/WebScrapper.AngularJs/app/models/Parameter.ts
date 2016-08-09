module app.models{
    export interface IParameter{
        name : string;
        value : string;
    }

    export class Parameter implements IParameter {

            constructor(public name : string,
                        public value : string) { }
    }

}