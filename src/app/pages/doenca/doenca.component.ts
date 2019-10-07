import {Component, OnInit} from '@angular/core';
import {Doenca} from './doenca.model';
import {DoencaService} from './doenca.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-doenca',
  templateUrl: './doenca.component.html'
})
export class DoencaComponent implements OnInit {

  doencas: any;
  idDoenca: any;

  constructor(private doencaService: DoencaService,
              private router: Router,
              private routerParam: ActivatedRoute
  ) {
  }

  ngOnInit() {
    /*    this.getDoenca();*/
    this.getDoencas();
  }

  /*  getDoenca(): void {
      const id = 1; /!*+this.route.snapshot.paramMap.get('id');*!/
      console.log(id);
      this.doencaService.getDoenca(id).subscribe(doenca => {
        this.doencas = doenca;
        console.log(this.doencas);
      });
    }*/
  getDoencas(): void {
    this.doencaService.getDoencas().subscribe(doenca => {
      this.doencas = doenca;
      console.log(this.doencas);
    });
  }

  selecinarTipoDoenca() {
    const idcrianca = this.routerParam.snapshot.queryParams['idCrianca'];

    this.router.navigate(['/doenca/questionario']
      , {queryParams: {
      idCrianca: idcrianca,
      idDoenca: this.idDoenca
    }});

  }

}


