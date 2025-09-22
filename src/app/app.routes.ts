import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AtivosComponent } from './components/ativos/ativos.component';
import { ChamadosComponent } from './components/chamados/chamados.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ativos', component: AtivosComponent },
  { path: 'chamados', component: ChamadosComponent },
  { path: 'relatorios', component: RelatoriosComponent }
];
