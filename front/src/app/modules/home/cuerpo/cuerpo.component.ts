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
  hideDataAt() {
    return (this.elementAt = false);
  }
  hideDataAc() {
    return (this.elementAc = false);
  }
  hideDataAj() {
    return (this.elementAj = false);
  }
  hideDataGa() {
    return (this.elementG = false);
  }
  showDataAj() {
    return (this.elementAj = true);
  }
  showDataAt() {
    return (this.elementAt = true);

  }
  showDataAc() {
    return (this.elementAc = true);

  }
  showDataGa() {
    return (this.elementG = true);

  }
}

