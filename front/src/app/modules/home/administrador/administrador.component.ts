import { Subscription } from 'rxjs';
import { RedsocialService } from './../../../core/services/redsocial/redsocial.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { redsocial } from 'src/app/core/interfaces/redsocial/redsocial.interfaces';
import { informacion } from 'src/app/core/interfaces/Informacion/informacion.interfaces';
import { locales } from 'src/app/core/interfaces/locales/locales.interfaces';
import { User } from 'src/app/core/interfaces/users/users.interface';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
  //CREAR BODYS DE RED SOCIAL / USUARIO / INFORMACION / LOCALES
  redSocialNva = {
    Red_social : "",
    Url : "",
  }

  localNvo = {
    Categoria:"",
    Titulo:"",
    Direccion:"",
    Telefono: "",
    Web: "",
    Facebook:"",
    Instagram: "",
    Imagen: "",
    Descripcion:"",
  }

  usuarioNvo = {
    username : "",
    password : "",
    email: "",
  }

  informacionNva = {
    Direccion : "",
    Horario : "",
    Telefono : "",
    Email :"",
    Logo : "",
  }

/* ************ */


>>>>>>>>> Temporary merge branch 2
  componenteSubscripcion : Subscription = new Subscription();
  elementCat = false; //SECCIONES
  elementInf = false; //CONTACTO
  elementRSoc = false; //REDES SOCIALES
  elementAdm = false; //ADMINISTRADOR


 constructor(private router: Router, private RedSocialService:RedsocialService) { }

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

  Guardar_RedSocial():void {
debugger
    this.componenteSubscripcion.add (
        this.RedSocialService.Guardar_RedSocial(this.redSocialNva).subscribe({next:(response)=>{
          debugger;
        }}) )
  }
  Buscar_RedSocial(nombre:any):void{

    this.componenteSubscripcion.add(
      this.RedSocialService.BuscarRedSocial(nombre.target.value).subscribe({next:(response:redsocial)=>{
this.redSocialNva=response;

    }}))
  }

}
