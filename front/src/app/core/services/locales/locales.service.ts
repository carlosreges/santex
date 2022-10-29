import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../../http/api.service';
import { locales } from '../../interfaces/locales/locales.interfaces';

@Injectable({
  providedIn: 'root'
})
export class localesService {

  constructor(private http:ApiService) { }

  Guardar_local (body : any) : Observable <void> {
    return this.http.post("local/add", body);

  }

  sendPost(body:FormData):Observable<any>{
    return this.http.post(`http://localhots:3000/upload`, body)
  }

  Buscar_localTitulo (titulo: string): Observable<locales>{
    debugger;
      return this.http.get(`local/buscar/${titulo}`);
    }

    Buscar_localID (id: number): Observable<locales>{
      debugger;
        return this.http.get(`local/search/${id}`);
      }

      Buscar_localCategoria (nombre:string): Observable<locales[]>{
return this.http.get(`local/buscar/categoria/${nombre}`);

      }


}

