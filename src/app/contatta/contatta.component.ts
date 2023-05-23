import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ContattaDto } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatta',
  templateUrl: './contatta.component.html',
  styleUrls: ['./contatta.component.scss']
})
export class ContattaComponent {
  model: ContattaDto = { nome: "", cognome: "", email: "", password: "", privacy: "", }

  constructor(public authService: AuthService, private router: Router) {

  }

  login() {
    this.authService.login(this.model).subscribe(u => {
      this.authService.setLoggedUser(u);
      this.router.navigate(["pokemons", "catturati"]);
    });
  }
}
