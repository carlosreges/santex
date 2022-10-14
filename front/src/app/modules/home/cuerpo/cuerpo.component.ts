import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent implements OnInit {

  elementG = false;
  elementAc = false;
  elementAt = false;
  elementAg = false;
  elementAj =false;
  constructor() { }

  ngOnInit(): void {
  }
  showDataAg() {
    if(this.elementAg==false){
    return (this.elementAg = true)}
    else
    {return (this.elementAg = false)};

  }
  hideDataAg() {
    return (this.elementAg = false);
  }
  showDataAt() {
    if(this.elementAt==false){
    return (this.elementAt = true)}
    else
    {return (this.elementAt = false)};
  }
  hideDataAt() {
    return (this.elementAt = false);
  }
    showDataAj() {
      if(this.elementAj==false){
      return (this.elementAj = true)}
      else
      {return (this.elementAj = false)};
  }
  hideDataAj() {
    return (this.elementAj = false);
  }
  showDataGa() {
    if(this.elementG==false){
    return (this.elementG = true)}
    else
    {return (this.elementG = false)};

  }
  hideDataGa() {
    return (this.elementG = false);
  }
  showDataAc() {
    if(this.elementAc==false){
    return (this.elementAc = true)}
    else
    {return (this.elementAc = false)};

  }
  hideDataAc() {
    return (this.elementAc = false);
  }

}

