export interface IInstitution {
    id?: number;
    nom?: string;
    description?: string;
    slug?: string;
}

export class Institution implements IInstitution {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public nom?: string, public description?: string, public slug?: string) {
    }
}
