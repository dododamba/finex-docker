import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

import {IUser} from './user';

type EntityResponseType = HttpResponse<IUser>;
type EntityArrayResponseType = HttpResponse<IUser[]>;


const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};

@Injectable({providedIn: 'root'})
export class UserService {
    env = environment;
    public resourceUrl = this.env.baseUrl + 'user';

    constructor(protected http: HttpClient) {
    }

    create(user: any) {
        return this.http.post(this.resourceUrl + '/add-account', user, headers);
    }

    update(user: IUser) {
        return this.http.put<IUser>(this.resourceUrl, user, headers);
    }

    find(id: number) {
        //  return this.http.get(`${this.resourceUrl}`, id, headers);
    }

    query() {
        return this.http.get(this.resourceUrl, headers);
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, headers);
    }
}
