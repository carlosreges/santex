import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  elementSec = false; //Secciones
  elementCont = false; //Contacto
  elementRSoc = false; //Redes Sociales
  constructor() { }

  ngOnInit(): void {
  }
  showDataSec() {
    return (this.elementSec = true);
  }
  hideDataSec() {
    return (this.elementSec = false);
  }
  showDataCont() {
    return (this.elementCont = true);
  }
  hideDataCont() {
    return (this.elementCont = false);
  }
  showDataRSoc() {
    return (this.elementRSoc = true);
  }
  hideDataRSoc() {
    return (this.elementRSoc = false);
  }
}



