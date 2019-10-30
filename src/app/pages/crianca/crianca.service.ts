import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Crianca} from './crianca.model';

@Injectable({
  providedIn: 'root'
})
export class CriancaService {

  resourceName = 'crianca';
  resourceUrl = environment.apiUrl + this.resourceName;
  searchUrl = environment.apiUrl + '/_search/crianca';
  criancas: Object[] = [];

  constructor(private http: HttpClient) {
  }

  public getCriancas(idUsuario): Observable<Crianca> {
    return this.http.get<Crianca>(`${this.resourceUrl}/buscarPorUsuario/` + `${idUsuario}/`);
  }

  public getCrianca(idCrianca: number): Observable<Crianca> {
    return this.http.get<Crianca>(`${this.resourceUrl}/` + `${idCrianca}/`);
  }

  public deleteCrianca(idCrianca: number): Observable<Crianca> {
    return this.http.delete<Crianca>(`${this.resourceUrl}/` + `${idCrianca}/`);
  }

  public editarCrianca(crianca: Crianca): Observable<Crianca> {
    return this.http.put<Crianca>(`${this.resourceUrl}/`, crianca);
  }



}
