import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezaComponent } from './cabeza/cabeza.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PiesComponent } from './pies/pies.component';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    CabezaComponent,
    CuerpoComponent,
    PiesComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule

  ],
  exports: [
    CabezaComponent,
    CuerpoComponent,
    PiesComponent,
    AdminComponent
  ]
})
export class HomeModule { }
