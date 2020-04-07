import {ISecteur} from '../secteur/secteur';

export interface ISousSecteur {
    id?: number;
    nom?: string;
    description?: string;
    slug?: string;
    secteur?: ISecteur;

}

export class SousSecteur implements ISousSecteur {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public nom?: string,
                public description?: string, public slug?: string, public secteur?: ISecteur) {
    }
}
