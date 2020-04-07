import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

import {IEmploye} from './employe';
import {EmployeCreateRequest} from 'src/app/requests/employe-create-request';

type EntityResponseType = HttpResponse<IEmploye>;
type EntityArrayResponseType = HttpResponse<IEmploye[]>;


const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})
export class EmployeService {
    env = environment;
    public resourceUrl = this.env.baseUrl + 'employe';

    constructor(protected http: HttpClient) {
    }

    create(employe: EmployeCreateRequest) {
        return this.http.post(this.resourceUrl, employe, headers);
    }

    update(employe: IEmploye) {
        return this.http.put<IEmploye>(this.resourceUrl, employe, headers);
    }

    find(slug: string) {
        return this.http.post(`${this.resourceUrl}` + '/show', slug, headers);
    }

    findByUser(slug: string) {
        return this.http.get(`${this.resourceUrl}` + '/show-by-user?slug=' + slug, headers);
    }


    query() {
        return this.http.get(this.resourceUrl, headers);
    }

    noAccount() {
        return this.http.get(this.resourceUrl + '/without-account', headers);
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, headers);
    }
}
