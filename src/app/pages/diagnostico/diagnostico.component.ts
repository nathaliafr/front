import {Component, OnInit} from '@angular/core';
import {Crianca} from '../crianca/crianca.model';
import {CriancaService} from '../crianca/crianca.service';
import {QuestionarioService} from '../diagnostico/questionario.service';
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

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html'
})
export class DiagnosticoComponent implements OnInit {

  listaQuestionario: any;
  criancaClick: {
    nome: '',
    documento: '',
    dataNascimento: '',
    nacionalidade: ''
  };
  crianca: Crianca;
  criancas: any;
  usuario: any;
  closeResult: string;
  titulo = 'Cadatrar novo dependente';
  grafico: any;
  idCrianca: any;
  public datasets: any;
  public data: any;

  constructor(private criancaService: CriancaService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private questionarioService: QuestionarioService) {

    if (!environment.usuario && !this.usuario) {
      this.router.navigate(['/login']);
    } else {
      this.usuario = environment.usuario;
      this.getListaDependente();
    }


  }


  getListaDependente() {
    this.criancaService.getCriancas(this.usuario.idUsuario).subscribe(criancas => {
      this.criancas = criancas;
    });
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
      console.log(listQuestionario);

    });

  }

  buscarGraficoDeDiagnotico(questionario) {
    this.questionarioService.getGrafico(questionario.idQuestionario).subscribe(grafico => {
      this.grafico = grafico;

      console.log(grafico);

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
