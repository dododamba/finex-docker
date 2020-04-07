import {environment} from 'src/environments/environment';
import {Injectable} from '@angular/core';
import {GroupeTravail, IGroupeTravail} from './groupe-travail';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class GroupeTravailService {
    env = environment;
    public resourceUrl = this.env.baseUrl + 'groupe-travail';

    constructor(protected http: HttpClient) {
    }

    create(groupe: GroupeTravail) {
        return this.http.post(this.resourceUrl, groupe, headers);
    }

    update(groupe: IGroupeTravail) {
        return this.http.put<IGroupeTravail>(this.resourceUrl, groupe, headers);
    }

    find(slug: string) {
        return this.http.post(this.resourceUrl + '/show', slug, headers);
    }

    select(slug: string) {
        return this.http.get(this.resourceUrl + '/select?slug=' + slug, headers);
    }

    query(page: number) {
        return this.http.get(this.resourceUrl + '?page=' + page, headers);
    }

    noAccount() {
        return this.http.get(this.resourceUrl + '/without-account', headers);
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, headers);
    }

    getMyGroup(slug: string) {
        return this.http.get(this.resourceUrl + '/my-groups?slug=' + slug, headers);
    }
}
