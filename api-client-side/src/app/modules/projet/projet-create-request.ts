export interface IProjetCreateRequest {
    nom?: string;
    numeroProjet?: number;
    description?: string;
    dateDebut?: string;
    dateFin?: any;
    budget?: any;
    responsable?: string;
    partenaires?: string[];
    soumissionaire?: string[];
    maitreDoeuvrage?: string;
    caracteristiqueTechniques?: [];
    secteur?: string;
    controllleur?: string;

}

export class ProjetCreateRequest implements IProjetCreateRequest {
    // tslint:disable-next-line: max-line-length
    constructor(
        public nom?: string,
        public numeroProjet?: number,
        public description?: string,
        public dateDebut?: any,
        public dateFin?: any,
        public budget?: string,
        public responsable?: string,
        public partenaires?: string[],
        public soumissionaire?: string[],
        public maitreDoeuvrage?: string,
        public caracteristiqueTechniques?: [],
        public   secteur?: string,
        public controllleur?: string,
    ) {
    }
}
