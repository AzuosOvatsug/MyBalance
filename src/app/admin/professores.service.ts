import {Injectable} from '@angular/core';
import {Professor} from './professor.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ProfessoresService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getProfessores(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/professores');
  }

  getProfessor(id: number): Observable<Professor> {
    return this.http.get<Professor>(this.API_URL + '/professores/' + id);
  }

  addProfessor(nome: string, disciplinaId: number): Observable<any> {
    const professor = {'nome': nome, 'disciplinaId': disciplinaId};
    return this.http.post(this.API_URL + '/professores', professor);
  }

  editProfessor(id: number, nome: string, disciplinaId: number): Observable<any> {
    const professor = {'nome': nome, 'disciplinaId': disciplinaId};
    return this.http.patch(this.API_URL + '/professores/' + id, professor);
  }

  delProfessor(id: number): Observable<Professor> {
    return this.http.delete<Professor>(this.API_URL + '/professores/' + id);
  }
}
