import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Crianca} from './crianca.model';
import {CriancaService} from './crianca.service';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {AppComponent} from '../../app.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  providers: [],
  bootstrap: [AppComponent]
})
@Component({
  selector: 'app-crianca',
  templateUrl: './crianca.component.html'
})
export class CriancaComponent implements OnInit {

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


  constructor(private criancaService: CriancaService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) {

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


  editarCrianca(criançaSercionada) {
    this.criancaClick = criançaSercionada;
    this.titulo = 'Editar dependente';

  }

  salvarEdicaoCrianca(criançaSercionada) {
    criançaSercionada.idUsuario = this.usuario.idUsuario;
    this.criancaService.editarCrianca(criançaSercionada).subscribe(req => {
      this.getListaDependente();
    }, error => {
      console.log(error);
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

  deletarCrianca(criançaSercionada) {
    console.log(criançaSercionada);
    this.criancaService.deleteCrianca(criançaSercionada.idCrianca).subscribe(resp => {
      this.getListaDependente();
    }, error => {
      console.log(error);
    });
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

  responderQuestionario(criancaSercionada) {
    console.log(criancaSercionada);
    this.router.navigate(['/doenca'], {queryParams: {idCrianca: criancaSercionada.idCrianca}});
  }


}
