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
