export interface ITypeFinancement {
    id?: number;
    libelle?: string;
    description?: string;
    slug?: string;
}

export class TypeFinancement implements ITypeFinancement {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public libelle?: string, public description?: string, public slug?: string) {
    }
}
