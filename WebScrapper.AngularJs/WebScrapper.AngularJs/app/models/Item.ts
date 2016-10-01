module app.models {

    export interface IItem {
        id: number;
        title: string;
        description: string;
        actions: IAction[];

    }

    export class Item implements IItem {
        constructor(public id: number,
            public title: string,
            public description: string,
            public actions : IAction[]) {
        }
    }

    export interface IItemParams extends ng.route.IRouteParamsService {
        id: number;
    }
}