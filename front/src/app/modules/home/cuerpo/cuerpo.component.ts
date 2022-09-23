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
    return (this.elementAg = true);
  }
  hideDataAg() {
    return (this.elementAg = false);
  }
  showDataAt() {
    return (this.elementAt = true);
  }
  hideDataAt() {
    return (this.elementAt = false);
  }
    showDataAj() {
    return (this.elementAj = true);
  }
  hideDataAj() {
    return (this.elementAj = false);
  }
  showDataGa() {
    return (this.elementG = true);

  }
  hideDataGa() {
    return (this.elementG = false);
  }
  showDataAc() {
    return (this.elementAc = true);

  }
  hideDataAc() {
    return (this.elementAc = false);
  }
  
}

