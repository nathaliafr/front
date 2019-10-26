import {Component, OnInit} from '@angular/core';
import {Pergunta} from './pergunta.model';
import {QuestionarioService} from './questionario.service';
import {Resposta} from './resposta.model';
import {ActivatedRoute, Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html'
})
export class QuestionarioComponent implements OnInit {

  pergunta: any;
  respostas: Resposta;
  idCrianca: any;
  idDoenca: any;
  list: any;
  usuario: any;

  constructor(private questionarioService: QuestionarioService,
              private router: Router,
              private routerParam: ActivatedRoute) {

    if (!environment.usuario && !this.usuario) {
      this.router.navigate(['/login']);
    } else {
      this.usuario = environment.usuario;
      this.idCrianca = this.routerParam.snapshot.queryParams['idCrianca'];
      this.idDoenca = this.routerParam.snapshot.queryParams['idDoenca'];
    }


  }

  ngOnInit() {
    this.getQuestionario();
  }

  getPerguntasDoenca(): void {
    const id = 1; /*+this.route.snapshot.paramMap.get('id');*/
    console.log(id);
    this.questionarioService.getPerguntasDoenca(id).subscribe(perguntas => {
      this.pergunta = perguntas;
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

  responderTudo(idCrianca) {

    this.list = {
      criancaId: this.idCrianca,
      responderPerguntaRequestList: []
    };
    for (var i = 0; i < this.pergunta.length; i++) {
      if (this.pergunta[i].respondido) {
        var splits = this.pergunta[i].respondido.split('-');
        this.list.responderPerguntaRequestList.push({
          idPergunta: splits[0],
          idResposta: splits[1]
        });
      }
    }
    console.log(this.list);
    this.questionarioService.responderQuestao(this.list).subscribe(grafico => {
      this.router.navigate(['/diagnostico'], {queryParams: {idCrianca: this.idCrianca}});
    }, error => {
      console.error('erro' + error);
    });

  }
}
