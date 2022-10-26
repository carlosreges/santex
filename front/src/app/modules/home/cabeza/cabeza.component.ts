import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CuerpoComponent } from '../cuerpo/cuerpo.component';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.scss']
})
export class CabezaComponent implements OnInit {

  @Output() changeSection= new EventEmitter<string>();
  section="";
  username="";
  password="";
  jwt="";
  toastService: any;


  constructor(private router: Router, private _authService: AuthService ) {}

  ngOnInit(): void {
  }

  cambiarSeccion(section: string){
   debugger;
    this.changeSection.emit(section);
  }

  login(username: string, password: string): void{
    this._authService.login (this.username, this.password)
    .subscribe(
      (res: any) => {
       debugger
        this._authService.setUser(res);
        this.router.navigateByUrl("administrador");
      },
      (err) => {
        this.toastService.presentToast(err.error);
      }
    )
  }
}
