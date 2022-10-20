import { AdministradorComponent } from './modules/home/administrador/administrador.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './core/guards/login/loggedin/loggedin.guard';
import { NotLoggedInGuard } from './core/guards/login/notloggedin/notloggedin.guard';
import { CabezaComponent } from './modules/home/cabeza/cabeza.component';
import { CuerpoComponent } from './modules/home/cuerpo/cuerpo.component';
import { PiesComponent } from './modules/home/pies/pies.component';
import { AppComponent } from './app.component';



const routes: Routes = 
[{
    path:'administrador', //Al entrar a esta ruta lo que hace es reenderizar el componente declarado abajo: "AdministradorComponent"
    component:AdministradorComponent
  },
  {
    path: '**', //Lo que hace el ** es que si pones alguna ruta agena de la que no se encuentre en este archivo Routing, te reenderiza CuerpoComponent
     component:CuerpoComponent
  }
];



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
