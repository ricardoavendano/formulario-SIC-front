import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { EncuestaComponent } from "./encuesta/encuesta.component";
import { ListaEncuestaComponent } from "./lista-encuesta/lista-encuesta.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
  { path: 'encuesta', component: EncuestaComponent,canActivate:[AuthGaurdService] },
  { path: 'lista-encuesta', component: ListaEncuestaComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
