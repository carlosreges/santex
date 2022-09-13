import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezaComponent } from './cabeza/cabeza.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PiesComponent } from './pies/pies.component';




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
