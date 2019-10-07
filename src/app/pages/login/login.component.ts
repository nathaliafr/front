import {Component, OnInit, OnDestroy} from '@angular/core';
import {LoginService} from './login.service';
import {environment} from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private loginService: LoginService,
              private router: Router) {
  }

  email: any;
  senha: any;
  erro: string  = null;

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  autenticarUsuario() {

    this.loginService.autenticarUsuario(this.email, this.senha).subscribe(usuario => {
      environment.usuario = usuario;
      this.router.navigate(['/dashboard']);
     }, error => {
      this.erro = 'Login ou senha invalida!';
      console.log(error);
    });
  }

}
