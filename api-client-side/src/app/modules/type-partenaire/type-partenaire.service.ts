import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ITypePartenaire} from './type-partenaire';
import {environment} from 'src/environments/environment';

const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};


@Injectable({
    providedIn: 'root'
})
export class TypePartenaireService {
    env = environment;
    public resourceUrl = this.env.baseUrl + 'type-partenaire';

    constructor(protected http: HttpClient) {
    }

    create(partenaire: any) {
        return this.http.post(this.resourceUrl, partenaire, headers);
    }

    update(partenaire: ITypePartenaire) {
        return this.http.put(this.resourceUrl, partenaire, headers);
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
