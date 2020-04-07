import {TypePartenaire} from '../type-partenaire/type-partenaire';


export interface IPartenaire {
    id?: number;
    nom?: string;
    type?: TypePartenaire;
    slug?: string;

}

export class Partenaire implements IPartenaire {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public nom?: string, public type?: TypePartenaire, public slug?: string) {
    }
}
