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

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  
  login():void{
    debugger;
    this.router.navigateByUrl("administrador")
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