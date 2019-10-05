import { Component, OnInit } from '@angular/core';
import {Pergunta} from './pergunta.model';
import {QuestionarioService} from './questionario.service';
import {Resposta} from './resposta.model';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html'
})
export class QuestionarioComponent implements OnInit {

  pergunta: Pergunta;
  respostas: Resposta;
  constructor(private questionarioService: QuestionarioService) { }

  ngOnInit() {
    this.getQuestionario();
     this.getPerguntasDoenca();
     this.getRespostas();
     this.getResposta();
  }
  getPerguntasDoenca(): void {
    const id = 1; /*+this.route.snapshot.paramMap.get('id');*/
    console.log(id);
    this.questionarioService.getPerguntasDoenca(id).subscribe(perguntas => {
      this.pergunta = perguntas;
      console.log(this.pergunta);
    });
  }
  getQuestionario(): void {
    this.questionarioService.getQuestionario().subscribe(perguntas => {
      this.pergunta = perguntas;
      console.log(this.pergunta);
    });
  }
  getRespostas(): void {
    this.questionarioService.getRespostas().subscribe(resposta => {
      this.respostas = resposta;
      console.log(this.respostas);
    });
  }
  getResposta(): void {
    const id = 1; /*+this.route.snapshot.paramMap.get('id');*/
    console.log(id);
    this.questionarioService.getResposta(id).subscribe(resposta => {
      this.respostas = resposta;
      console.log(this.respostas);
    });
  }
}

