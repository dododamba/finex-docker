import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IControle} from './controle';

const headers = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};


@Injectable({
  providedIn: 'root'
})

export class ControleService {

  env = environment;
  public resourceUrl = this.env.baseUrl + 'control';

  constructor(protected http: HttpClient) {
  }

  create(control: any) {
    return this.http.post(this.resourceUrl, control, headers);
  }

  update(control: IControle) {
    return this.http.put(this.resourceUrl, control, headers);
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
