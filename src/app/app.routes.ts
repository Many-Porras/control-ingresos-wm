import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginComponent } from './modules/auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // 🔹 Asegura que inicie en login
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'raciones', loadChildren: () => import('./modules/raciones/raciones.module').then(m => m.RacionesModule) },
      { path: 'registro-compras', loadChildren: () => import('./modules/registro-compras/registro-compras.module').then(m => m.RegistroComprasModule) },
    ]
  },
  { path: '**', redirectTo: '/login' } // 🔹 Redirige cualquier otra URL inválida a login
];
