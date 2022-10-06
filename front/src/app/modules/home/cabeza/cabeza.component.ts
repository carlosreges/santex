import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  login():void{
    debugger;
    this.router.navigateByUrl("administrador")
  }

  changeSection(event:any, sectionvalue:number) {
    this.clickSection.next(sectionvalue);
    console.log(event);
  }
}