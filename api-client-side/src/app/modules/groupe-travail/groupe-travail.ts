import {IEmploye} from '../employe/employe';
import {IProjet} from '../projet/projet';

export interface IGroupeTravail {
    id?: number;
    nom?: string;
    administrateur?: IEmploye;
    membres?: IEmploye[];
    projet?: IProjet;
    slug?: string;

}

export class GroupeTravail implements IGroupeTravail {
    // tslint:disable-next-line: max-line-length
    constructor(
        public id?: number,
        public nom?: string,
        public administrateur?: IEmploye,
        public membres?: IEmploye[],
        public projet?: IProjet,
        public slug?: string) {
    }
}
