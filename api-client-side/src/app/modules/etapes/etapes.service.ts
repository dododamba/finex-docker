import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Etape, IEtape} from './etapes';
import {environment} from 'src/environments/environment';

const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class EtapeService {
    env = environment;
    public resourceUrl = this.env.baseUrl + 'etape';

    constructor(protected http: HttpClient) {
    }

    create(etape: Etape) {
        return this.http.post(this.resourceUrl, etape, headers);
    }

    createForSpecificProject(etape: any) {
        return this.http.post(this.resourceUrl + '/specific', etape, headers);
    }

    update(etape: IEtape) {
        return this.http.put<IEtape>(this.resourceUrl, etape, headers);
    }

    find(slug: string) {
        return this.http.get(this.resourceUrl + '/show?slug='+ slug, headers);
    }

    query(page: number) {
        return this.http.get(this.resourceUrl + '?page=' + page, headers);
    }

    fetchNoPagination() {
        return this.http.get(this.resourceUrl + '/no-pagination', headers);
    }

    delete(slug: string) {
        return this.http.get(`${this.resourceUrl}` + '/delete?slug=' + slug, headers);
    }

    getByGroup(page: number, slug: string) {
        return this.http.get(this.resourceUrl + '/select-by-project?page=' + page + '&slug=' + slug, headers);
    }
}
