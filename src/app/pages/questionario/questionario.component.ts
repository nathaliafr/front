import { Component, OnInit } from '@angular/core';
import {Doenca} from '../doenca/doenca.model';
import {Pergunta} from './pergunta.model';
import {QuestionarioService} from './questionario.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html'
})
export class QuestionarioComponent implements OnInit {

  pergunta: Pergunta;
  constructor(private questionarioService: QuestionarioService) { }

  ngOnInit() {
    this.getQuestionario();
     this.getPerguntasDoenca();
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
}

