import {Injectable} from '@angular/core';
import {ITache, Tache} from './tache';

import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
    providedIn: 'root'
})
export class TacheService {

    env = environment;
    public resourceUrl = this.env.baseUrl + 'tache';

    constructor(protected http: HttpClient) {
    }

    create(tache: Tache) {
        return this.http.post(this.resourceUrl, tache, headers);
    }

    update(tache: ITache) {
        return this.http.put<ITache>(this.resourceUrl, tache, headers);
    }

    find(slug: string) {
        return this.http.post(this.resourceUrl + '/show', slug, headers);
    }

    query(page: number) {
        return this.http.get(this.resourceUrl + '?page=' + page, headers);
    }

    fetchNoPagination() {
        return this.http.get(this.resourceUrl + '/no-pagination', headers);
    }

    delete(slug: string): Observable<HttpResponse<any>> {
        return this.http.put<any>(`${this.resourceUrl}` + '/delete', slug, headers);
    }
}
