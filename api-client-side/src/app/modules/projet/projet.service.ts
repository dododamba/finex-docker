import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ProjetCreateRequest} from './projet-create-request';
import {IProjet} from './projet';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';

const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class ProjetService {
   
    env = environment;
    public resourceUrl = this.env.baseUrl + 'projet';

    constructor(protected http: HttpClient) {
    }

    create(employe: ProjetCreateRequest) {
        return this.http.post(this.resourceUrl, employe, headers);
    }

    createMyProject(employe: ProjetCreateRequest) {
        return this.http.post(this.resourceUrl + '/create/own-projet', employe, headers);
    }

    update(employe: IProjet) {
        return this.http.put<IProjet>(this.resourceUrl, employe, headers);
    }

    find(slug: string) {
        return this.http.get(this.resourceUrl + '/show?slug=' + slug, headers);
    }

    query(page: number) {
        return this.http.get(this.resourceUrl + '?page=' + page, headers);
    }

    fetchNoPagination() {
        return this.http.get(this.resourceUrl + '/no-pagination', headers);
    }

    fetchAvailbleGroupe() {
        return this.http.get(this.resourceUrl + '/groupes', headers);
    }

    delete(slug: string): Observable<HttpResponse<any>> {
        return this.http.put<any>(`${this.resourceUrl}` + '/delete', slug, headers);
    }

    select(slug: string, page: number) {
        return this.http.get(this.resourceUrl + '/select?slug=' + slug + '&page=' + page, headers);
    }


    myProject(slug: string) {
        return this.http.get(this.resourceUrl + '/my-project?slug=' + slug, headers);
    }

    addMaitreDeouvre(maitreDeouvre: any) {

        return this.http.post(this.resourceUrl + '/create/own-projet', maitreDeouvre, headers);

    }
}
