export interface ICreateFinancementRequest {
    libelle?: string;
    dateSignature?: string;
    montantTotal?: number;
    projetSlug?: string;
    typeSlug?: string;
    partenaireSulg?: string;
}

export class CreateFinancementRequest implements ICreateFinancementRequest {
    constructor(
        public libelle?: string,
        public dateSignature?: string,
        public montantTotal?: number,
        public projetSlug?: string,
        public typeSlug?: string,
        public partenaireSulg?: string,
    ) {

    }
}


