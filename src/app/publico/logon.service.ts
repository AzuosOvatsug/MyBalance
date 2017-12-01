import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LogonService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  autenticar(email: string, senha: string) {
    const qs = 'login=' + email + '&senha=' + senha;
    return this.http.get(this.API_URL + '/usuarios?' + qs);
  }

}
