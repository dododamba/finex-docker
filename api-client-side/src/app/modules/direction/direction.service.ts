import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

import {IDirection} from './direction';

type EntityResponseType = HttpResponse<IDirection>;
type EntityArrayResponseType = HttpResponse<IDirection[]>;
const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};

@Injectable({providedIn: 'root'})
export class DirecIDirectionService {
    env = environment;
    public resourceUrl = this.env.baseUrl + 'direction';

    constructor(protected http: HttpClient) {
    }

    create(direction: IDirection): Observable<EntityResponseType> {
        return this.http.post<IDirection>(this.resourceUrl, direction, {observe: 'response'});
    }

    update(direction: IDirection): Observable<EntityResponseType> {
        return this.http.put<IDirection>(this.resourceUrl, direction, {observe: 'response'});
    }

    find(slug: string) {
        return this.http.post(`${this.resourceUrl}` + '/show', slug, headers);
    }

    query() {
        // return this.http.get<IDirection[]>(`${this.resourceUrl}`, headers);
        return this.http.get(this.resourceUrl, headers);
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, {observe: 'response'});
    }
}
