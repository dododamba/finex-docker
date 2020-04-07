import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IRegion} from './region';
import {environment} from '../../../environments/environment';

const headers = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  env = environment;
  public resourceUrl = this.env.baseUrl + 'region';

  constructor(protected http: HttpClient) {
  }

  create(region: any) {
    return this.http.post(this.resourceUrl, region, headers);
  }

  update(region: IRegion) {
    return this.http.put(this.resourceUrl, region, headers);
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
