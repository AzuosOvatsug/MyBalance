import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {UsuarioComponent} from './usuario/usuario.component';
import {DisciplinasService} from './disciplinas.service';
import {TurmasService} from './turmas.service';
import {PessoasService} from './pessoas.service';
import {ProfessoresService} from './professores.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    AdminComponent,
    UsuarioComponent,
    PaginaNaoEncontradaComponent
  ],
  providers: [
    DisciplinasService,
    TurmasService,
    PessoasService,
    ProfessoresService
  ]
})
export class AdminModule {
}
