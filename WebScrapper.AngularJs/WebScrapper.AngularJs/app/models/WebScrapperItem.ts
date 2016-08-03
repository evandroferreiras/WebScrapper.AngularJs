module app.models {
    export interface IItem   {

    }

    export interface IWebScrapperItem extends IItem {
        id: number;
        title: string;
        description: string;
    }

    export class WebScrapperItem implements IWebScrapperItem {
        constructor(public id: number,
            public title: string,
            public description: string) {

        }
    }

    export interface IWebScrapperItemParams extends ng.route.IRouteParamsService {
        id: number;
    }
}