import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.scss']
})
export class CabezaComponent implements OnInit {

  @Output() changeSection= new EventEmitter<any>();
  section="";
  username="";
  password="";
  jwt="";
  toastService: any;


  constructor(private router: Router , private _authService: AuthService ) {}

  ngOnInit(): void {
  }

  cambiarSeccion(section: number){
    this.changeSection.emit(this.section);
  }

  login(username: string, password: string): void{
    this._authService.login (this.username, this.password)
    .subscribe(
      (res: any) => {
        this._authService.setUser(res);
        this.router.navigateByUrl("administrador");
      },
      (err) => {
        this.toastService.presentToast(err.error);
      }
    )

<<<<<<< HEAD
   /*  if(this.jwt !=""){
      this.router.navigateByUrl("administrador")
    }else{
      console.error("Usuario Invalido");
    } */
=======
>>>>>>> 1ab89497ee1ef9d1b62b9ac73112471bd0af6bc3
  }

  }