import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezaComponent } from './cabeza/cabeza.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PiesComponent } from './pies/pies.component';
import { AdministradorComponent } from './administrador/administrador.component';





@NgModule({
  declarations: [
    CabezaComponent,
    CuerpoComponent,
    PiesComponent,
    AdministradorComponent

  ],
  imports: [
    CommonModule

  ],
  exports: [
    CabezaComponent,
    CuerpoComponent,
    PiesComponent,
    AdministradorComponent,
    ]
})
export class HomeModule { }
