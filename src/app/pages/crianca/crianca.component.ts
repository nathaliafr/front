import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Crianca} from './crianca.model';
import {CriancaService} from './crianca.service';

@Component({
  selector: 'app-crianca',
  templateUrl: './crianca.component.html',
  styleUrls: ['./crianca.component.scss']
})
export class CriancaComponent implements OnInit {

  crianca: Crianca;
  constructor(private criancaService: CriancaService,
              private route: ActivatedRoute) {
    /*    this.userProfileService.getUser().then((user) => {
          console.log(user);
          this.usuario = user;
      });*/
    this.criancaService.getCriancas().subscribe(criancas => {
      this.crianca = criancas;
      console.log(this.crianca);
    });
  }

  ngOnInit() {
    this.getCrianca();
  }
  getCrianca(): void {
    const id = 1; //+this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.criancaService.getCrianca(id).subscribe(crianca => {
      this.crianca = crianca;
      console.log(this.crianca);
    });
  }
}
