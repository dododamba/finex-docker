export interface IRole {
    id?: number;
    name?: string;
    slug?: string;

}

export class Direction implements IRole {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public name?: string, public slug?: string) {
    }
}
