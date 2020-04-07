import {IEmploye} from '../employe/employe';
import {IProjet} from '../projet/projet';

export interface ITache {
    id?: number;
    nom?: string;
    etape?: string;
    executant?: IEmploye;
    planificateur?: IEmploye;
    projet?: IProjet;
    dateDebut?: string;
    dateFin?: string;
    description?: string;
    slug?: string;
    createdAt?: string;
}

export class Tache implements ITache {
    // tslint:disable-next-line: max-line-length
    constructor(
        public id?: number,
        public nom?: string,
        public etape?: string,
        public executant?: IEmploye,
        public planificateur?: IEmploye,
        public projet?: IProjet,
        public dateDebut?: string,
        public dateFin?: string,
        public description?: string,
        public slug?: string,
        public createdAt?: string,
    ) {
    }
}
