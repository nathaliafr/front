import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  resourceName = 'usuario';
  resourceUrl = environment.apiUrl + this.resourceName;
  searchUrl = environment.apiUrl + '/_search/usuario';
  usuarios: Object[] = [];

  constructor(private http: HttpClient) {
  }

  public getUsuarios(): Observable<User> {
    return this.http.get<User>(`${this.resourceUrl}/`);
  }

  public getUsuario(idUsuario: number): Observable<User> {
    return this.http.get<User>(`${this.resourceUrl}/` + `${idUsuario}/`);
  }

  cadastrarUsuario(usuario: any): Observable<any> {

    return this.http.put<any>(`${this.resourceUrl}/`, usuario);
  }
}


/*
criar para editar o usuario

@PostMapping
public @ResponseBody Usuario editarUsuario(@RequestBody Usuario usuario) {
  return usuarioService.editarUsuario(usuario.getIdUsuario(), usuario);
}*/
