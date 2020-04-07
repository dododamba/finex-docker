export interface ISecteur {
    id?: number;
    nom?: string;
    description?: string;
    slug?: string;

}

export class Secteur implements ISecteur {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public nom?: string, public description?: string, public slug?: string) {
    }
}
