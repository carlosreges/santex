import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPieComponent } from './admin-pie/admin-pie.component';
import { AdminCuerpoComponent } from './admin-cuerpo/admin-cuerpo.component';
import { AdminCabezaComponent } from './admin-cabeza/admin-cabeza.component';



@NgModule({
  declarations: [
    AdminPieComponent,
    AdminCuerpoComponent,
    AdminCabezaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
