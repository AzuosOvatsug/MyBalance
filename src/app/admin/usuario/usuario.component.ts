import {Component, OnInit} from '@angular/core';
import {DisciplinasService} from "../disciplinas.service";
import {TurmasService} from "../turmas.service";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario;
  disciplinas = null;
  codigo;
  ano;
  disciplina;
  cadastro_ok = false;
  cadastro_erro = false;

  constructor(private usuarioService: AuthService) {
  }

  ngOnInit() {
    this.usuarioService.get()
      .subscribe(usuario => this.usuario = usuario);
    this.usuario = this.usuarioService.get();
  }

  salvar() {
    this.usuarioService.get()
      .subscribe(
        turma => {
          this.limpar();
          this.cadastro_ok = true;
        },
        erro => {
          this.cadastro_erro = true;
          this.cadastro_ok = false;
        }
      );
  }

  limpar() {
    this.codigo = null;
    this.ano = null;
    this.disciplina = null;
    this.cadastro_ok = false;
    this.cadastro_erro = false;
  }
}
