import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'auth',
    //TODO: guards
    loadChildren: () => import('./auth/auth.module').then( m=>m.AuthModule ),
  },
  {
    path: 'dashboard',
    //TODO: guards
    loadChildren: () => import('./dashboard/dashboard.module').then( m=>m.DashboardModule ),
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
