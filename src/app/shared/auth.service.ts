import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

  API_URL = 'http://localhost:3000';
  user = null;

  constructor(private http: HttpClient) {
  }

  auth(email: string, senha: string): Observable<any[]> {
    const qs = 'login=' + email + '&senha=' + senha;
    return this.http.get<any[]>(this.API_URL + '/usuarios?' + qs);
  }

  set(user) {
    this.user = user;
  }

  get() {
    return this.user;
  }

  getuser(id:number){
    return this.http.get<any>(this.API_URL + '/usuarios/' + id);
  }

  updateUser(id:number, nome: String, email: String, senha: String, datanasc: Date, altura: number, peso: number, sexo: String): Observable<any>{
    const usuario = {'nome':nome, 'email': email, 'senha': senha, 'datanasc': datanasc, 'altura': altura, 'peso': peso, 'sexo': sexo}
    return this.http.patch(this.API_URL + '/usuarios/' + id, usuario);

  }

  clear() {
    this.user = null;
  }

  logout() {
    this.clear();
  }
}
