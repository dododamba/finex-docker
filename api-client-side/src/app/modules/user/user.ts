import {Role} from 'src/app/models/role';

export interface IUser {
    id?: number;
    username?: string;
    email?: string;
    avatar?: string;
    role?: Role;
    slug?: string;

}

export class Direction implements IUser {
    // tslint:disable-next-line: max-line-length
    constructor(public id?: number, public username?: string, public email?: string, public avatar?: string, public role?: Role, public slug?: string) {
    }
}
