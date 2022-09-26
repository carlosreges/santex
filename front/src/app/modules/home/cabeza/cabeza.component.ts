import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CuerpoComponent } from '../cuerpo/cuerpo.component';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MAX_PASSWORD_LENGTH, MAX_USERNAME_LENGTH, MIN_PASSWORD_LENGTH, MIN_USERNAME_LENGTH } from 'src/app/core/interfaces/users/users.interface';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.scss']
})
export class CabezaComponent implements OnInit {
 constructor(private router: Router) {}

  @Output() clickSection = new EventEmitter<number>()

  ngOnInit(): void {
  }

  goToPage(page: string):void{
    this.router.navigate(['./'])
  }
  
  login():void{
    debugger;
    this.router.navigateByUrl("administrador")
  }

  changeSection(event:any, sectionvalue:number) {
    this.clickSection.next(sectionvalue);
    console.log(event);
  }
}