import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../../http/api.service';
import { redsocial } from '../../interfaces/redsocial/redsocial.interfaces';

@Injectable({
  providedIn: 'root'
})
export class localesService {

  constructor(private http:ApiService) { }

  Guardar_local (body : any) : Observable <void> {
    return this.http.post("local/add", body);

  }

  Buscar_local (nombre: string): Observable<local>{
  debugger;
    return this.http.get(`local/buscar/${nombre}`);
  }

}

