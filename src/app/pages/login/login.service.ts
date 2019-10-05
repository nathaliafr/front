import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  resourceUrlPergunta = environment.apiUrl + 'login';


  constructor(private http: HttpClient) {
  }

   autenticarUsuario(email, senha): Observable<any> {

    return this.http.post<any>(`${this.resourceUrlPergunta}/`, {
      senha: senha ,
      email: email
    });
  }

}

