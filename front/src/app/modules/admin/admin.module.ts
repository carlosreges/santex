import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezaComponent } from './admin-cabeza/admin_cabeza.component';
import { CuerpoComponent } from './admin-cuerpo/admin-cuerpo.component';
import { PiesComponent } from './admin-pies/admin-pies.component';




@NgModule({
  declarations: [
    CabezaComponent,
    CuerpoComponent,
    PiesComponent,
  ],
  imports: [
    CommonModule

  ],
  exports: [
    CabezaComponent,
    CuerpoComponent,
    PiesComponent
  ]
})
export class HomeModule { }
