import {IProjet} from '../projet/projet';

export interface IDecaissement {
    montantEncaisse?: string,
    dateSiganture?: any,
    total?: string,
    projet?: IProjet,
    slug?: string
}

export class Decaissement implements IDecaissement {
    constructor(
        public montantEncaisse?: string,
        public dateSiganture?: any,
        public total?: string,
        public projet?: IProjet,
        public slug?: string
    ) {
    }
}
