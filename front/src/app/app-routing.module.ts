import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './core/guards/login/loggedin/loggedin.guard';
import { NotLoggedInGuard } from './core/guards/login/notloggedin/notloggedin.guard';
import { CabezaComponent } from './modules/home/cabeza/cabeza.component';
import { CuerpoComponent } from './modules/home/cuerpo/cuerpo.component';
import { PiesComponent } from './modules/home/pies/pies.component';
import { AdminCabezaComponent } from './modules/home/admin/admin-cabeza.component';
import { AdminCuerpoComponent } from './modules/home/cuerpo/admin-cuerpo.component';
import { AdminPieComponent } from './modules/home/pies/admin-pie.component';

const routes: Routes = [
  /* {
    path: '',
    component:CabezaComponent
  },
  {
    path: '',
     component:CuerpoComponent
  },
  {
    path:'',
    component:PiesComponent
  }] */
  //SECCION DE ADMINISTRADOR
  {
    path: '',
    component:AdminCabezaComponent
  },
  {
    path: '',
     component:AdminCuerpoComponent
  },
  {
    path:'',
    component:AdminPieComponent
  }]


  /*{
    path: 'auth',
    canActivate: [NotLoggedInGuard],
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'profile',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'dog',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./modules/dog/dog.module').then(m => m.DogModule),
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
