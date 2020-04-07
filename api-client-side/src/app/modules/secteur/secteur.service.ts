import {Injectable} from '@angular/core';
import {ISecteur} from './secteur';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';

const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};

@Injectable({
    providedIn: 'root'
})
export class SecteurService {

    env = environment;
    public resourceUrl = this.env.baseUrl + 'secteur';

    constructor(protected http: HttpClient) {
    }

    create(secteur: any) {
        return this.http.post(this.resourceUrl, secteur, headers);
    }

    update(secteur: ISecteur) {
        return this.http.put(this.resourceUrl, secteur, headers);
    }

    find(id: string) {
        return this.http.get(`${this.resourceUrl}` + '/show/' + id, headers);
    }

    fetch(page: number) {
        return this.http.get(this.resourceUrl + '?page=' + page, headers);
    }

    fetchNoPagination() {
        return this.http.get(this.resourceUrl + '/no-pagination', headers);
    }

    delete(id: string) {
        return this.http.delete(`${this.resourceUrl}/${id}`, headers);
    }
}
