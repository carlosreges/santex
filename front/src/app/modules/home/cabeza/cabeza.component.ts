import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.scss']
})
export class CabezaComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl //PARA DIRECCIONAR A UNA PAGINA DENTRO DEL PROYECTO
  }
  login():void{
    debugger;
    this.router.navigateByUrl("/administrador")
  }
}
