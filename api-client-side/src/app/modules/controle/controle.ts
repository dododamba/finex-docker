import {IControlleur} from '../controlleur/controlleur';

export interface IControle {
    id?: number;
    libelle?: string;
    description?: string;
    slug?: string;
    dateControle?: Date;
    typeControle?: string;
    controlleur?: IControlleur;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class Controle implements IControle {
    constructor(
        public id?: number,
        public libelle?: string,
        public description?: string,
        public slug?: string,
        public dateControle?: Date,
        public typeControle?: string,
        public controlleur?: IControlleur,
        public createdAt?: Date,
        public updatedAt?: Date,
        public deletedAt?: Date,

    ) {
    }
}
