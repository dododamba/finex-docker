import {IPartenaire} from '../partenaire/partenaire';
import {IMaitreOeuvrage} from '../maitre-oeuvrages/maitre-oeuvrage';
import {ISoumissionaire} from '../soumissionaires/soumissionaire';
import {IEntreprise} from '../entreprise/entreprise';
import {IFinancement} from '../financement/financement';
import {IEmploye} from '../employe/employe';
import {IControle} from '../controle/controle';

export interface IProjet {
    id?: number;
    libelle?: string;
    slug?: string;
    description?: string;
    partenaires?: IPartenaire[];
    maitreDouvrage?: IMaitreOeuvrage[];
    soumissionaires?: ISoumissionaire[];
    entreprises?: IEntreprise[];
    financements?: IFinancement[];
    responsable?: IEmploye;
    controles?: IControle[];

}

export class Projet implements IProjet {
    // tslint:disable-next-line: max-line-length
    constructor(
        public id?: number,
        public libelle?: string,
        public slug?: string,
        public description?: string,
        public partenaires?: IPartenaire[],
        public maitreDouvrage?: IMaitreOeuvrage[],
        public soumissionaires?: ISoumissionaire[],
        public  entreprises?: IEntreprise[],
        public financements?: IFinancement[],
        public responsable?: IEmploye,
        public  controles?: IControle[]
    ) {
    }
}
