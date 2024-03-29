import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IInstitution} from './institution';

const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};


@Injectable({
    providedIn: 'root'
})
export class InstitutionService {
    env = environment;
    public resourceUrl = this.env.baseUrl + 'institution';

    constructor(protected http: HttpClient) {
    }

    create(type: any) {
        return this.http.post(this.resourceUrl, type, headers);
    }

    update(type: IInstitution) {
        return this.http.put(this.resourceUrl, type, headers);
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
