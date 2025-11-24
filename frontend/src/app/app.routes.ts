import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { RecuperarPass } from './components/recuperarpass/recuperarpass';
import { Dashboard } from './components/dashboard/dashboard';
import { Perfil } from './components/perfil/perfil';
import { Register } from './components/register/register';
import { Soporte } from './components/soporte/soporte';
import { Listalluser } from './components/listalluser/listalluser';
import { Tickets } from './components/tickets/tickets';
import { Herramientas } from './components/herramientas/herramientas';
import { Laboratorios } from './components/laboratorios/laboratorios';
import { Analisis } from './components/analisis/analisis';
import { Materiales } from './components/materiales/materiales';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: Login },
  { path: 'recuperarpass', component: RecuperarPass },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard]},
  { path: 'perfil', component: Perfil, canActivate: [AuthGuard] },
  { path: 'register', component: Register, canActivate: [AuthGuard] },
  { path: 'soporte', component: Soporte, canActivate: [AuthGuard] },
  { path: 'listalluser', component: Listalluser, canActivate: [AuthGuard] },
  { path: 'tickets', component: Tickets, canActivate: [AuthGuard] },
  { path: 'laboratorios', component: Laboratorios, canActivate: [AuthGuard] },
  { path: 'analisis', component: Analisis, canActivate: [AuthGuard] },
  { path: 'herramientas', component: Herramientas, canActivate: [AuthGuard] },
  { path: 'materiales', component: Materiales, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];
