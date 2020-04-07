import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {IFinancement} from './financement';
import {CreateFinancementRequest} from './create-financement-request';

const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class FinancementService {
    env = environment;
    public resourceUrl = this.env.baseUrl + 'financement';

    constructor(protected http: HttpClient) {
    }

    create(financement: CreateFinancementRequest) {
        return this.http.post(this.resourceUrl, financement, headers);
    }

    encaisser(encaisser: any) {
        return this.http.post(this.resourceUrl + '/encaisser', encaisser, headers);
    }

    update(financement: IFinancement) {
        return this.http.put<IFinancement>(this.resourceUrl, financement, headers);
    }

    find(slug: string) {
        return this.http.get(this.resourceUrl + '/show?slug=' + slug, headers);
    }

    query(page: number) {
        return this.http.get(this.resourceUrl + '?page=' + page, headers);
    }

    noAccount() {
        return this.http.get(this.resourceUrl + '/without-account', headers);
    }

    delete(id: string): Observable<HttpResponse<any>> {
        return this.http.put<any>(`${this.resourceUrl}/delete`, id, headers);
    }
}
