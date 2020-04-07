import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {IPartenaire} from './partenaire';
import {PartenaireCreateRequest} from 'src/app/requests/partenaire-create-request';


const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};

@Injectable({providedIn: 'root'})
export class PartenaireService {
    env = environment;
    public resourceUrl = this.env.baseUrl + 'partenaire';

    constructor(protected http: HttpClient) {
    }

    create(role: PartenaireCreateRequest) {
        return this.http.post(this.resourceUrl, role, headers);
    }

    update(role: IPartenaire) {
        return this.http.put(this.resourceUrl, role, headers);
    }

    find(id: string) {
        return this.http.get(`${this.resourceUrl}/${id}`, headers);
    }

    fetch(page: number) {
        return this.http.get(this.resourceUrl + '?page=' + page, headers);
    }

    fetchAll() {
        return this.http.get(this.resourceUrl + '/no-pagination', headers);
    }


    delete(slug: string) {
        return this.http.put(`${this.resourceUrl}/delete`, slug, headers);
    }

    addPartenaireFromInputProjet(data: any){
        return this.http.post(this.resourceUrl +'/from-input', data, headers);

    }

    addPartenaireFromSelectProjet(data: any){
        return this.http.post(this.resourceUrl + '/from-select', data, headers);

    }
}
