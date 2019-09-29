import { Component, OnInit } from '@angular/core';
import {Crianca} from './crianca.model';

@Component({
  selector: 'app-cadastrar-crianca',
  templateUrl: './cadastrar-crianca.component.html',
})
export class CadastrarCriancaComponent implements OnInit {

  crianca: Crianca;
  constructor() { }

  ngOnInit() {
  }

}
