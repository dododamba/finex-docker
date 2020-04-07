export interface IRegion {
    id?: number;
    libelle?: string;
    cheflieux?: string;
    description?: string;
    slug?: string;
}

export class Region implements IRegion {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public libelle?: string, public   cheflieux?: string, public description?: string, public slug?: string) {
    }
}
