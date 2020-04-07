import {Direction} from '../direction/direction';

export interface IEmploye {
    id?: number;
    nom?: string;
    prenom?: string;
    matricule?: string;
    dateNaissance?: any;
    dateEmbauche?: any;
    salaire?: number;
    direction?: Direction;
    slug?: string;
}

export class Employe implements IEmploye {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public nom?: string, public prenom?: string, public matricule?: string, public dateNaissaince?: any, public dateEmbauche?: any, public salaire?: number, public direction?: Direction, public slug?: string) {
    }
}
