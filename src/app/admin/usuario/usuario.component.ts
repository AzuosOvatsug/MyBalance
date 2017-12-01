import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario;
  id = null;
  nome = null;
  email = null;
  senha = null;
  datanasc = null;
  altura = null;
  peso = null;
  sexo = null;

  editar_ok = false;
  editar_erro = false;

  constructor(private usuarioService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.getuser(this.id)
    .subscribe(usuario => { 
              this.nome = usuario.nome;
              this.email = usuario.email;
              this.senha = usuario.senha;
              this.datanasc = usuario.datanasc;
              this.altura = usuario.altura;
              this.peso = usuario.peso;
              this.sexo = usuario.sexo;
            }
    );
  }

  editar() {
    this.usuarioService.updateUser(this.id, this.nome, this.email, this.senha, this.datanasc, this.altura, this.peso, this.sexo)
    .subscribe(usuario => {
      this.editar_ok = true;
      this.editar_erro = false;
    },
    erro => {
      this.editar_ok = false;
      this.editar_erro = true;
    });
  }
}
