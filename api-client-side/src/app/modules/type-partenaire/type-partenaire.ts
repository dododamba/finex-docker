export interface ITypePartenaire {
    id?: number;
    libelle?: string;
    description?: string;
    slug?: string;

}

export class TypePartenaire implements ITypePartenaire {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public libelle?: string, public description?: string, public slug?: string) {
    }
}
