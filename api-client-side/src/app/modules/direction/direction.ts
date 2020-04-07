import {IInstitution} from '../institution/institution';

export interface IDirection {
    id?: number;
    libelle?: string;
    slug?: string;
    description?: string;
    responsable?: number;
    institution?: IInstitution

}

export class Direction implements IDirection {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public libelle?: string, public slug?: string, public description?: string,
                public responsable?: number,
                public  institution?: IInstitution) {
    }
}
