export interface IMaitreOeuvrage {
    id?: number;
    nom?: string;
    description?: string;
    slug?: string;
}

export class MaitreOeuvrage implements IMaitreOeuvrage {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public nom?: string, public description?: string, public slug?: string) {
    }
}
