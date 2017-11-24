import { Component, OnInit } from '@angular/core';
import {PessoasService} from "../pessoas.service";

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {
  nome = null;
  cadastro_ok = null;
  cadastro_erro = false;


  constructor(private pessoasService: PessoasService) { }

  ngOnInit() {
  }

  salvar() {
    this.pessoasService.addPessoa(this.nome)
      .subscribe(pessoa => {
          console.log(pessoa);
          this.cadastro_ok = true;
          this.cadastro_erro = false;
        },
        erro => {
          this.cadastro_ok = false;
          this.cadastro_erro = true;
        });
  }

}
