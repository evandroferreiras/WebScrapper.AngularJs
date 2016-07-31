module app.crudCtrl {
    export interface ICrudCtrl {
        titleWindow: string;
        item : app.models.IWebScrapperItem;
    }


    export interface IWebScrapperItemParams extends ng.route.IRouteParamsService {
        id: number;
    }   


} 