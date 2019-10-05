import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pergunta} from './pergunta.model';
import {Resposta} from './resposta.model';
import {User} from '../user-profile/user.model';

@Injectable ({
  providedIn: 'root'
})
export class QuestionarioService {
   resourceNamePergunta = 'pergunta';
   resourceUrlPergunta = environment.apiUrl + this.resourceNamePergunta;
   searchUrl = environment.apiUrl + '/_search/doenca';
   resourceNamePerguntaDoenca = 'listaDePerguntaPorDoenca';
   resourceNameResposta = 'resposta';
   resourceUrlResposta = environment.apiUrl + this.resourceNameResposta;
   resposta: Object[] = [];
   pergunta: Object[] = [];

   constructor(private http: HttpClient) {
   }

  public getQuestionario(): Observable<Pergunta> {
    return this.http.get<Pergunta>(`${this.resourceUrlPergunta}/`);
  }
  public getPerguntasDoenca(idDoenca: number): Observable<Pergunta> {
    return this.http.get<Pergunta>(`${this.resourceUrlPergunta}/` + `${this.resourceNamePerguntaDoenca}/` + `${idDoenca}`);
  }
  public getRespostas(): Observable<Resposta> {
    return this.http.get<Resposta>(`${this.resourceUrlResposta}/`);
  }
  public getResposta(idResposta: number): Observable<Resposta> {
    return this.http.get<Resposta>(`${this.resourceUrlResposta}/` + `${idResposta}/`);
  }
}

