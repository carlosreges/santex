import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LoginModule } from './../../login/login.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.scss']
})
export class CabezaComponent implements OnInit {
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
        this.router.navigateByUrl("administrador");
      },
      (err) => {
        this.toastService.presentToast(err.error);
      }
    )

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
  }
}



