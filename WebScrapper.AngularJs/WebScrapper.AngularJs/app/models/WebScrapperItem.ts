module app.models{

    export interface IWebScrapperItem {
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

    
}