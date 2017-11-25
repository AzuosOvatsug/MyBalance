import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usuario = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.usuario = this.authService.get();
    if (!this.usuario) {
      this.router.navigate(['']); //AQUI É ONDE FICA A AUTENTICAÇÃO, SE DESCOMENTAR, NÃO É POSSIVEL NAVEGAR POR LINK
    }
  }

  sair() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
