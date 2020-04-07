import {IProjet} from '../projet/projet';
import {ITypeFinancement} from '../type-financement/type-financement';
import { IPartenaire } from '../partenaire/partenaire';

export interface IFinancement {
    nom?: string;
    montantEncaisse?: string;
    dateSiganture?: string;
    montantRestant?: any;
    total?: any;
    projet?: IProjet;
    typeFinancement?: ITypeFinancement;
    slug?: string;
    partenaires?: IPartenaire[];

}

export class Financement implements IFinancement {
    // tslint:disable-next-line: max-line-length
    constructor(
        public nom?: string,
        public montantEncaisse?: string,
        public dateSiganture?: any,
        public montantRestant?: any,
        public total?: string,
        public projet?: IProjet,
        public typeFinancement?: ITypeFinancement,
        public slug?: string,
        public partenaires?: IPartenaire[]
    ) {
    }
}
