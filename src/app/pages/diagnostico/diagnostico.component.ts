import {Component, OnInit} from '@angular/core';
import {Crianca} from '../crianca/crianca.model';
import {CriancaService} from '../crianca/crianca.service';
import {QuestionarioService} from '../diagnostico/questionario.service';
import {DoencaService} from '../doenca/doenca.service';

import Chart from 'chart.js';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {environment} from '../../../environments/environment';

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from '../../variables/charts';
import {forEach} from '@angular/router/src/utils/collection';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html'
})
export class DiagnosticoComponent implements OnInit {
  idDoenca: any;
  listaQuestionario: any;
  criancaClick: {
    nome: '',
    documento: '',
    dataNascimento: '',
    nacionalidade: ''
  };
  mensagem: string;
  crianca: Crianca;
  criancas: any;
  usuario: any;
  closeResult: string;
  titulo = 'Cadatrar novo dependente';
  grafico: any;
  idCrianca: any;
  public datasets: any;
  public data: any;
  doencas: any;

  constructor(private criancaService: CriancaService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private routerParam: ActivatedRoute,
              private questionarioService: QuestionarioService,
              private doencaService: DoencaService) {

    this.idCrianca = this.routerParam.snapshot.queryParams['idCrianca'];

    if (!environment.usuario && !this.usuario) {
      this.router.navigate(['/login']);
    } else {
      this.usuario = environment.usuario;
      this.getListaDependente();
      this.getDoencas();
      if (this.idCrianca) {
        this.buscarDiagnosticosDeUmaCrianca();
      }
    }


  }

  getDoencas(): void {
    this.doencaService.getDoencasTodas().subscribe(doenca => {
      this.doencas = doenca;
    });
  }

  getListaDependente() {

    if (this.usuario.tipo == 'USUARIO') {
      console.log('usuario');
      this.criancaService.getCriancas(this.usuario.idUsuario).subscribe(criancas => {
        this.criancas = criancas;
      });
    } else {
      console.log('especilista');
      this.criancaService.getTodasCriancas().subscribe(criancas => {
        this.criancas = criancas;
      });
    }
  }

  ngOnInit() {
    this.getCrianca();
  }

  getCrianca(): void {
    const id = 1;
    this.criancaService.getCrianca(id).subscribe(crianca => {
      this.crianca = crianca;
    });
  }


  salvarRespostaDoEspecialista(idQuestionario) {
    if (this.idDoenca) {
      this.questionarioService.salvarRespostaFinalDoDiagnostico(this.idDoenca, idQuestionario).subscribe(listQuestionario => {
        this.buscarDiagnosticosDeUmaCrianca();
      }, error => {
        this.buscarDiagnosticosDeUmaCrianca();

      });
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.titulo = 'Cadatrar novo dependente';
    this.criancaClick = {
      nome: '',
      documento: '',
      dataNascimento: '',
      nacionalidade: ''
    };
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  buscarDiagnosticosDeUmaCrianca() {
    console.log(this.idCrianca);
    this.questionarioService.getQuestionariosPorIdCrianca(this.idCrianca).subscribe(listQuestionario => {
      this.listaQuestionario = listQuestionario;

    });

  }

  buscarGraficoDeDiagnotico(questionario, resultaClicado) {
    this.questionarioService.getGrafico(questionario.idQuestionario).subscribe(grafico => {
      this.grafico = grafico;
      this.mensagem = 'Resultado do diagnostico: ' + resultaClicado;

      var data = {
        labels: this.grafico.labels,
        datasets: [{data: this.grafico.data}]
      };

      const chartOrders = document.getElementById('chart-orders');
      const ordersChart = new Chart(chartOrders, {
        type: 'pie',
        data: data
      });
      parseOptions(Chart, chartOptions());
    });
  }


}
