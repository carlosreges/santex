import { locales } from 'src/app/core/interfaces/locales/locales.interfaces';
import { response } from 'express';
import { localesService } from './../../../core/services/locales/locales.service';
import { Subscription } from 'rxjs';
import { informacion } from 'src/app/core/interfaces/Informacion/informacion.interfaces';
import { Component, OnInit, Output } from '@angular/core';
import { informacionService } from 'src/app/core/services/informacion/informacion.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent implements OnInit {
  section="";
/*   elementG = false;
  elementAc = false;
  elementAt = false;
  elementAg = false;
  elementAj =false; */
  informacionDato?: informacion | null ;
  componenteSubscripcion: Subscription=new Subscription();
  cards: locales[] = [];
  constructor( private informacionService: informacionService, private localesService: localesService) {
  }

  ngOnInit(): void {
    this.componenteSubscripcion.add(

      this.informacionService.Buscar_info('1').subscribe({next:(response:informacion)=>{
        this.informacionDato=response;
        console.log(response);
    }}))
  }
  /* showDataAg() {
    if(this.elementAg==false){
    return (this.elementAg = true)}
    else
    {return (this.elementAg = false)};


  }
  hideDataAg() {
    return (this.elementAg = false);
  }
  showDataAt() {
    if(this.elementAt==false){
    return (this.elementAt = true)}
    else
    {return (this.elementAt = false)};
  }
  hideDataAt() {
    return (this.elementAt = false);
  }
    showDataAj() {
      if(this.elementAj==false){
      return (this.elementAj = true)}
      else
      {return (this.elementAj = false)};
  }
  hideDataAj() {
    return (this.elementAj = false);
  }
  showDataGa() {
    if(this.elementG==false){
    return (this.elementG = true)}
    else
    {return (this.elementG = false)};

  }
  hideDataGa() {
    return (this.elementG = false);
  }
  showDataAc() {
    if(this.elementAc==false){
    return (this.elementAc = true)}
    else
    {return (this.elementAc = false)};

  }
  hideDataAc() {
    return (this.elementAc = false);
  }
 */
/*   mostrarSeccion(section: any){
    return (this.section)
  } */

Secciones(event:any){
 /*  window.location.hash=this.section; */
debugger;
 
  window.location.hash=event;
}

  obtenerDatosCards(cardType:string){
   this.cards=[];
    this.componenteSubscripcion.add(
      this.localesService.Buscar_localCategoria(cardType).subscribe({
        next:response=>{
          this.cards=response;
        }
      })
    )
  }
}

