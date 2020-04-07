
export interface IMaitreDoeuvreDelegue {
    id?: number;
    nom?: string;
    responsable?: string;
    description?: string;
    slug?: string;
}

export class MaitreDoeuvreDelegue implements IMaitreDoeuvreDelegue {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public nom?: string, public   responsable?: string, public description?: string, public slug?: string) {
    }
}
