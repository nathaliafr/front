import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pergunta} from './pergunta.model';

@Injectable ({
  providedIn: 'root'
})
export class QuestionarioService {
   resourceNamePergunta = 'pergunta';
   resourceUrlPergunta = environment.apiUrl + this.resourceNamePergunta;
   searchUrl = environment.apiUrl + '/_search/doenca';
   resourceNamePerguntaDoenca = 'listaDePerguntaPorDoenca';
   pergunta: Object[] = [];

   constructor(private http: HttpClient) {
   }

  public getQuestionario(): Observable<Pergunta> {
    return this.http.get<Pergunta>(`${this.resourceUrlPergunta}/`);
    console.log(this.pergunta);
  }
  public getPerguntasDoenca(idDoenca: number): Observable<Pergunta> {
    return this.http.get<Pergunta>(`${this.resourceUrlPergunta}/` + `${this.resourceNamePerguntaDoenca}/` + `${idDoenca}`);
  }
}

