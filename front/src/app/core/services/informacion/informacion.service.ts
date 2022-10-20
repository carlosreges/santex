import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../../http/api.service';
import { informacion } from '../../interfaces/informacion/informacion.interfaces';

@Injectable({
  providedIn: 'root'
})
export class informacionService {

  constructor(private http:ApiService) { }

  Guardar_info (body : any) : Observable <void> {
    return this.http.post("info/add", body);

  }

  Buscar_info (nombre: string): Observable<informacion>{
  debugger;
    return this.http.get(`info/buscar/${nombre}`);
  }

}
