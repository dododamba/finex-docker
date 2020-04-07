import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

import {IRole} from './role';

type EntityResponseType = HttpResponse<IRole>;
type EntityArrayResponseType = HttpResponse<IRole[]>;


const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};

@Injectable({providedIn: 'root'})
export class RoleService {
    env = environment;
    public resourceUrl = this.env.baseUrl + 'role';

    constructor(protected http: HttpClient) {
    }

    create(role: IRole) {
        return this.http.post<IRole>(this.resourceUrl, role, headers);
    }

    update(role: IRole) {
        return this.http.put<IRole>(this.resourceUrl, role, headers);
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
