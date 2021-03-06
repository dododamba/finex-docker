import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {IMaitreOeuvrage, MaitreOeuvrage} from './maitre-oeuvrage';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';

const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class MaitreOeuvrageService {
    env = environment;
    public resourceUrl = this.env.baseUrl + 'maitre-douvrage';

    constructor(protected http: HttpClient) {
    }

    create(employe: MaitreOeuvrage) {
        return this.http.post(this.resourceUrl, employe, headers);
    }

    update(employe: IMaitreOeuvrage) {
        return this.http.put<IMaitreOeuvrage>(this.resourceUrl, employe, headers);
    }

    find(slug: string) {
        return this.http.post(this.resourceUrl + '/show', slug, headers);
    }

    query(page: number) {
        return this.http.get(this.resourceUrl + '?page=' + page, headers);
    }

    noPagination() {
        return this.http.get(this.resourceUrl + '/no-pagination', headers);
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, headers);
    }
}
