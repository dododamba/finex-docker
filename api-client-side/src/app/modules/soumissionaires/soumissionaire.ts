export interface ISoumissionaire {
    id?: number;
    nom?: string;
    description?: string;
    slug?: string;
    responsable?: string;
    raisonSociale?: string;
    numeroIdFiscal?: string;
    nomBanque?: string;
    numeroCompte?: string;
    codeSwift?: string;
    adresse?: string;
    information?: string;
}

export class Soumissionaire implements ISoumissionaire {
    // tslint:disable-next-line: max-line-length
    constructor(
        public id?: number,
        public nom?: string,
        public description?: string,
        public slug?: string,
        public  responsable?: string,
        public raisonSociale?: string,
        public numeroIdFiscal?: string,
        public nomBanque?: string,
        public numeroCompte?: string,
        public codeSwift?: string,
        public adresse?: string,
        public information?: string,
    ) {
    }
}
