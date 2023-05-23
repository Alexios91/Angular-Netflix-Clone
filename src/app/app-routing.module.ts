import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrelloComponent } from './carrello/carrello.component';
import { ContattaComponent } from './contatta/contatta.component';
import { CopertinaComponent } from './copertina/copertina.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { path: 'carrello', component: CarrelloComponent },
  { path: 'contatta', component: ContattaComponent },
  { path: 'copertina', component: CopertinaComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'registrazione', component: RegistrazioneComponent },
  { path: 'wrapper', component: WrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
