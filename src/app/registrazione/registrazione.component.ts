import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterDto } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {
  model = new RegisterDto();

  constructor(public authService: AuthService, private router: Router) {

  }

  register() {
    this.authService.register(this.model).subscribe(u => {
      this.authService.setLoggedUser(u);

      this.model = new RegisterDto();

      this.router.navigate(["posts"]);
    });
  }
}