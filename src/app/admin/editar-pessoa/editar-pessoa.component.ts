import { Component, OnInit } from '@angular/core';
import {PessoasService} from "../pessoas.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  nome;
  id = null;
  editar_ok = null;
  editar_erro = false;

  constructor(private pessoasService: PessoasService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.pessoasService.getPessoa(this.id)
        .subscribe(pessoa => {
          this.nome = pessoa.nome;
        });
    }  
  }

  editar() {
    this.pessoasService.editPessoa(this.id , this.nome)
    .subscribe(pessoa => {
        this.editar_ok = true;
        this.editar_erro = false;
      },
      erro => {
        this.editar_ok = false;
        this.editar_erro = true;
      });
  }

}
