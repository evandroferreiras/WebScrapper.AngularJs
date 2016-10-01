module app.config {

    export class ConstantsValues {
        appName: string;
        appVersion: string;
        apiUrl: string;
        baseUrl: string;
        enableDebug: boolean
    }


    export class Constants {
        static get Default(): ConstantsValues {
            var constantsValues = new ConstantsValues();

            constantsValues.appName = "My App";
            constantsValues.appVersion = "2.0";
            constantsValues.apiUrl = 'http://localhost:4256/';
            constantsValues.baseUrl = '/';
            constantsValues.enableDebug = true;


            return constantsValues;
        }
    }
}