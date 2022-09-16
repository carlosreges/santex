import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
  elementSec = false; //SECCIONES
  elementCon = false; //CONTACTO
  elementRSoc = false; //REDES SOCIALES
 constructor() { }

  ngOnInit(): void {
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

}
