import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  resourceName = 'questionario';
  resourceUrl = environment.apiUrl + this.resourceName;

  constructor(private http: HttpClient) {
  }

  public getQuestionariosPorIdCrianca(idCrianca): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/crianca/` + `${idCrianca}/`);
  }

  public getGrafico(idQuestionario): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}/grafico/` + `${idQuestionario}/`);
  }

  public salvarRespostaFinalDoDiagnostico(idDoenca, idQuestionario) {
    return this.http.post(`${this.resourceUrl}/respostaDoEscialista/`, {
      idDoenca: idDoenca,
      idQuestionario: idQuestionario
    });
  }

}
