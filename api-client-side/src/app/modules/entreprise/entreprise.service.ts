import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const headers = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};



@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  env = environment;
  public resourceUrl = this.env.baseUrl + 'entreprise';

  constructor(protected http: HttpClient) {
  }

  create(entreprise: any) {
    return this.http.post(this.resourceUrl, entreprise, headers);
  }

  addEntrepriseFromProjet(entreprise: any) {
    return this.http.post(this.resourceUrl + '/from-projet', entreprise, headers);
  }

  update(entreprise: any) {
    return this.http.put(this.resourceUrl, entreprise, headers);
  }

  find(id: string) {
    return this.http.get(`${this.resourceUrl}` + '/show?slug=' + id, headers);
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
