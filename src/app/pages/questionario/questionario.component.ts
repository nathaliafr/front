import {Component, OnInit} from '@angular/core';
import {Pergunta} from './pergunta.model';
import {QuestionarioService} from './questionario.service';
import {Resposta} from './resposta.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html'
})
export class QuestionarioComponent implements OnInit {

  pergunta: Pergunta;
  respostas: Resposta;
  idCrianca: any;
  idDoenca: any;

  constructor(private questionarioService: QuestionarioService,
              private routerParam: ActivatedRoute) {

    this.idCrianca = this.routerParam.snapshot.queryParams['idCrianca'];
    this.idDoenca = this.routerParam.snapshot.queryParams['idDoenca'];

  }

  ngOnInit() {
    this.getQuestionario();
   // this.getRespostas();
    //this.getResposta();
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
    if (this.idDoenca == 'todasDoencas') {
      this.questionarioService.getQuestionario().subscribe(perguntas => {
        this.pergunta = perguntas;
        console.log(this.pergunta);
      });
    } else {
      this.questionarioService.getPerguntasDoenca(this.idDoenca).subscribe(perguntas => {
        this.pergunta = perguntas;
        console.log(this.pergunta);
      });
    }
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

