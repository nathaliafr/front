import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  resouceName = 'usuario';
  resourceUrl = environment.apiUrl + this.resouceName;
  searchUrl = environment.apiUrl + '/_search/usuario';
  constructor() { }
}
/*

chamar para salvar novo usuario na tela de registro

@PostMapping ("/{novoUsuario}")
public @ResponseBody Usuario novoUsuario(@RequestBody Usuario usuario) {
  return usuarioService.criarUsuario(usuario);
}*/
