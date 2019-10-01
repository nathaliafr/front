import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Doenca} from './doenca.model';

@Injectable ({
  providedIn: 'root'
})
export class DoencaService {

  resourceName = 'doenca';
  resourceUrl = environment.apiUrl + this.resourceName;
  searchUrl = environment.apiUrl + '/_search/doenca';
  doenca: Object[] = [];

  constructor(private http: HttpClient) {
  }
  public getDoencas(): Observable<Doenca> {
    return this.http.get<Doenca>(`${this.resourceUrl}/`);
    console.log(this.doenca);
  }
/*  public getDoenca(idDoenca: number): Observable<Doenca> {
    return this.http.get<Doenca>(`${this.resourceUrl}/` + `${idDoenca}/`);
  }*/
}
