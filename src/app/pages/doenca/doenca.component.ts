import { Component, OnInit } from '@angular/core';
import {Doenca} from './doenca.model';
import {DoencaService} from './doenca.service';

@Component({
  selector: 'app-doenca',
  templateUrl: './doenca.component.html'
})
export class DoencaComponent implements OnInit {

  doencas: Doenca;
  constructor(private doencaService: DoencaService) {
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
}
