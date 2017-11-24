import { Component, OnInit } from '@angular/core';
import {ProfessoresService} from "../professores.service";
import {DisciplinasService} from "../disciplinas.service";

@Component({
  selector: 'app-cadastro-professor',
  templateUrl: './cadastro-professor.component.html',
  styleUrls: ['./cadastro-professor.component.css']
})
export class CadastroProfessorComponent implements OnInit {
  nome = null;
  disciplina = null;
  cadastro_ok = null;
  cadastro_erro = false;

  constructor(private professoresService: ProfessoresService, private disciplinasService: DisciplinasService, ) { }

  ngOnInit() {
  }

  salvar() {
    this.professoresService.addProfessor(this.nome , this.disciplina)
      .subscribe(professor => {
          console.log(professor);
          this.cadastro_ok = true;
          this.cadastro_erro = false;
        },
        erro => {
          this.cadastro_ok = false;
          this.cadastro_erro = true;
        });
  }

}
