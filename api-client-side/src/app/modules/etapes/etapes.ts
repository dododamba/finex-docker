export interface IEtape {
    id?: number;
    nom?: string;
    slug?: string;
    description?: string;
    dateDebut?: Date,
    dateFin?: Date,
    cout?: number,
    groupeTravail?: number


}

export class Etape implements IEtape {
    // tslint:disable-next-line: max-line-length
    constructor(
        public id?: number,
        public nom?: string,
        public slug?: string,
        public description?: string,
        public dateDebut?: Date,
        public dateFin?: Date,
        public cout?: number,
        public groupeTravail?: number) {
    }
}
