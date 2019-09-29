import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Crianca} from './crianca.model';

@Injectable ({
providedIn: 'root'
})
export class CriancaService {

  resourceName = 'crianca';
  resourceUrl = environment.apiUrl + this.resourceName;
  searchUrl = environment.apiUrl + '/_search/crianca';
  criancas: Object[] = [];

  constructor(private http: HttpClient) {
  }

  public getCriancas(): Observable<Crianca> {
    return this.http.get<Crianca>(`${this.resourceUrl}/`);
    console.log(this.criancas);
  }
  public getCrianca(idCrianca: number): Observable<Crianca> {
    return this.http.get<Crianca>(`${this.resourceUrl}/` + `${idCrianca}/`);
  }
}
