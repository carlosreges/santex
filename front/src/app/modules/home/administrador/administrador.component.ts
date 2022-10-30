import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { redsocial } from 'src/app/core/interfaces/redsocial/redsocial.interfaces';
import { informacion } from 'src/app/core/interfaces/Informacion/informacion.interfaces';
import { locales } from 'src/app/core/interfaces/locales/locales.interfaces';
import { User } from 'src/app/core/interfaces/users/users.interface';

import { RedsocialService } from './../../../core/services/redsocial/redsocial.service';
import { informacionService } from './../../../core/services/informacion/informacion.service';
import { localesService } from './../../../core/services/locales/locales.service';


/* USUARIO */



import {
  MAX_USERNAME_LENGTH,
  MIN_USERNAME_LENGTH,
  PASSWORD_PATTERN,
} from 'src/app/core/interfaces/users/users.interface';
import { debugPort } from 'process';
import { UserService } from 'src/app/core/services/user/user.service';
/* import { resetFakeAsyncZone } from '@angular/core/testing';
import { clear } from 'console'; */




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
  }

/* ************ */
/* DOCUMENTOS ADJUNTOS ***************/
private fileImp:any;

  componenteSubscripcion : Subscription = new Subscription();
  elementCat = false; //SECCIONES
  elementInf = false; //CONTACTO
  elementRSoc = false; //REDES SOCIALES
  elementAdm = false; //ADMINISTRADOR


 constructor(private router: Router, private RedSocialService:RedsocialService,
  private informacionService:informacionService, private localesService:localesService,private userService:UserService) { }

  ngOnInit(): void {


  }
/* FILE ADJUNTAR */
/* getFile($event:any): void{

const [file] = $event.target.files; */

/* this.fileImp={
  fileRaw:file,
  fileName: file.name,
}

}

sendFile():void{
  const body = new FormData
  body.append('myFile', this.fileImp.fileRaw, this.fileImp.fileName )
this.localesService.sendPost(body);
.subscribe(res  => console.log(res));
} */




/* ******************* */

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

  /* FUNCION RED SOCIAL*****************/
  Guardar_RedSocial():void {
    this.componenteSubscripcion.add (
        this.RedSocialService.Guardar_RedSocial(this.redSocialNva).subscribe({next:(response)=>{

       alert("Guardado Exitosamente");
    }}))
  }
  Buscar_RedSocial(nombre:any):void{
    this.componenteSubscripcion.add(
      this.RedSocialService.BuscarRedSocial(nombre.target.value).subscribe({next:(response:redsocial)=>{
        this.redSocialNva=response;
    }}))
  }

  Eliminar_RedSocial(nombre:string):void{
    this.componenteSubscripcion.add(
      this.RedSocialService.EliminarRedSocial(nombre).subscribe({next:(response:redsocial)=>{
        alert("Eliminado Exitosamente");
    }}))
  }
/* FUNCIONES INFORMACION ************ */
  Guardar_Info():void {
    this.componenteSubscripcion.add (
      this.informacionService.Guardar_info(this.informacionNva).subscribe({next:(response)=>{
        alert("Guardado Exitosamente");
    }}))
  }

  Buscar_Info(id:any):void{
    this.componenteSubscripcion.add(
     /*  this.informacionService.Buscar_info(id.target.value).subscribe({next:(response:informacion)=>{ */
        this.informacionService.Buscar_info(id).subscribe({next:(response:informacion)=>{
        this.informacionNva=response;
    }}))
  }

/* FUNCIONES LOCALES ****************/
  Guardar_local():void {
    this.componenteSubscripcion.add (

      this.localesService.Guardar_local(this.localNvo).subscribe({next:(response)=>{
        debugger;
     alert("Guardado Exitosamente");
        }}))
  }



  Buscar_localTitulo(titulo:any):void{
    this.componenteSubscripcion.add(
      this.localesService.Buscar_localTitulo(titulo.target.value).subscribe({next:(response:locales)=>{
        this.localNvo=response;
    }}))
  }

  Buscar_localID(id:any):void{
    this.componenteSubscripcion.add(
      this.localesService.Buscar_localID(id.target.value).subscribe({next:(response:locales)=>{
        this.localNvo=response;
    }}))
  }
  Guardar_Usuario(){
    console.log(this.usuarioNvo);
    debugger;

    this.componenteSubscripcion.add(
      this.userService.guardar(this.usuarioNvo).subscribe({
        next:(response:any)=>{
          debugger;

          alert("Guardado Exitosamente");
        }
      })
      )
  }

  Eliminar_Usuario(username:string):void{
    debugger;
    this.componenteSubscripcion.add(

      this.userService.EliminarUsuario(username).subscribe({next:(response:User)=>{

        alert("Eliminado Exitosamente");
    }}))
  }

  Buscar_Usuario(username:any):void{
    this.componenteSubscripcion.add(
      this.userService.BuscarUsuario(username.target.value).subscribe({next:(response:User)=>{
        this.usuarioNvo=response
    }}))
  }


}

