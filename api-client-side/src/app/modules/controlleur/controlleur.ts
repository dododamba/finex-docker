export interface IControlleur {
    id?: number;
    nom?: string;
    description?: string;
    slug?: string;

}

export class Controlleur implements IControlleur {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public nom?: string, public description?: string, public slug?: string) {
    }
}
