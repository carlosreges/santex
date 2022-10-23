import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../../http/api.service';
import { redsocial } from '../../interfaces/redsocial/redsocial.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RedsocialService {

  constructor(private http:ApiService) { }

  Guardar_RedSocial (body : any) : Observable <void> {
    return this.http.post("redSocial/add", body);

  }

  BuscarRedSocial (nombre: string): Observable<redsocial>{
  debugger;
    return this.http.get(`redSocial/buscar/${nombre}`);
  }

  EliminarRedSocial (nombre: string): Observable<redsocial>{
    debugger;
      return this.http.delete(`redSocial/del/${nombre}`);
    }


}
