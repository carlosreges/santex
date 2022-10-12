<<<<<<< HEAD
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
=======
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LoginModule } from './../../login/login.module';
import { Component, OnInit } from '@angular/core';
>>>>>>> b434915ffec0cdf54a729420fb1d1da1885444de
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.scss']
})
export class CabezaComponent implements OnInit {
<<<<<<< HEAD
 constructor(private router: Router, private _authService: AuthService ) {}

  @Output() clickSection = new EventEmitter<number>()

  ngOnInit(): void {
  }

  login(username: string, password: string):void{
    this._authService.login (this.username, this.).subscribe(
      (res) => {
        this._authService.setUser(res.datos);
        this._authService.setToken(res.token);
        //localStorage.setItem("token", res.token);
        CabezaComponent.updateUserStatus.next(true);
        this.router.navigate(["/home"]);
        //localStorage.setItem("datos", JSON.stringify(datosUser));
        /*Swal.fire(
          "Bienvenido " + res.datos.nombre_usuario,
          "Tu Rol es: " + res.datos.rol,
          "success"
        );*/

      },
      /*(err) => {
        .tr({
          icon: "error",
          title: "Error",
          text:
            "No se ha podido iniciar sesión, verifique su correo y contraseña",
        });
      }*/
    );

 /* changeSection(event:any, sectionvalue:number) {
    this.clickSection.next(sectionvalue);
    console.log(event);*/
=======
  elementG = false;
  elementAc = false;
  elementAt = false;
  elementAg = false;
  elementAj =false;
  username="";
  password="";
  jwt="";
  toastService: any;


  constructor(private router: Router , private _authService: AuthService ) {}

  ngOnInit(): void {
  }

  login(username: string, password: string): void{
    this._authService.login (this.username, this.password)
    .subscribe(
      (res: any) => {
        this._authService.setUser(res);
        this.router.navigateByUrl("administrador")
      },
      (err) => {
        this.toastService.presentToast(err.error);
      }
    )



   /*  if(this.jwt !=""){
      this.router.navigateByUrl("administrador")
    }else{
      console.error("Usuario Invalido");
    } */
  }

  showDataAg() {

    return (this.elementAg = true);
  }

  showDataAt() {
    return (this.elementAt = true);
  }

  showDataAj() {
    return (this.elementAj = true);
  }

  showDataGa() {
    return (this.elementG = true);
  }

  showDataAc() {
    return (this.elementAc = true);
>>>>>>> b434915ffec0cdf54a729420fb1d1da1885444de
  }
}



