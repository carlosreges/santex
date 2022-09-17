import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
  elementSec = false; //SECCIONES
  elementCon = false; //CONTACTO
  elementRSoc = false; //REDES SOCIALES
  elementAdm = false; //ADMINISTRADOR
 constructor(private router: Router) { }

  ngOnInit(): void {
  }
  showDataAdm() {
    return (this.elementAdm = true);
  }
  hideDataAdm() {
    return (this.elementAdm = false);
  }
  showDataSec() {
    return (this.elementSec = true);
  }
  hideDataSec() {
    return (this.elementSec = false);
  }
  showDataCon() {
    return (this.elementCon = true);
  }
  hideDataCon() {
    return (this.elementCon = false);
  }
  showDataRSoc() {
    return (this.elementRSoc = true);
  }
  hideDataRSoc() {
    return (this.elementRSoc = false);
  }

  //Función para desloguear administrador.
  logout(): void{
    this.router.navigateByUrl('')
  }
}
