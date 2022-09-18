import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
  elementCat = false; //SECCIONES
  elementInf = false; //CONTACTO
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
  showDataCat() {
    return (this.elementCat = true);
  }
  hideDataCat() {
    return (this.elementCat = false);
  }
  showDataInf() {
    return (this.elementInf = true);
  }
  hideDataInf() {
    return (this.elementInf = false);
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
