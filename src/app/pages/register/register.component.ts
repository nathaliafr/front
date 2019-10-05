import {Component, OnInit} from '@angular/core';
import {UserProfileService} from '../user-profile/user-profile.service';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userProfileService: UserProfileService,
  private router: Router) {

}

  usuario: any = {};
  error: string = null;


  ngOnInit() {
  }

  cadastrarUsuario() {
    console.log(this.usuario);
    if (!this.usuario.nome) {
      this.error = 'Compo nome nao informado!';
      return;
    } else if (!this.usuario.email) {
      this.error = 'Compo e-mail nao informado!';
      return;
    } else if (!this.usuario.documento) {
      this.error = 'Compo documento nao informado!';
      return;
    } else if (!this.usuario.nacionalidade) {
      this.error = 'Compo nacionalidade nao informado!';
      return;
    } else if (!this.usuario.telefoneResidencial) {
      this.error = 'Compo telefone residencial nao informado!';
      return;
    } else if (!this.usuario.telefoneCelular) {
      this.error = 'Compo telefone celular nao informado!';
      return;
    } else if (!this.usuario.dataNascimento) {
      this.error = 'Compo data nacimento nao informado!';
      return;
    } else if (!this.usuario.senha) {
      this.error = 'Compo senha nao informado!';
      return;
    }


    this.userProfileService.cadastrarUsuario(this.usuario).subscribe(usuario => {
      environment.usuario = usuario;
      this.router.navigate(['/dashboard']);
     }, error => {
      this.error = "Erro ao salvar usuario!";
      console.log(error);
    });
  }


}
