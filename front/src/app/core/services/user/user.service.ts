import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../http/api.service';
import { User } from '../../interfaces/users/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiService: ApiService) {}

  getProfile(): Observable<User> {
    return this.apiService.get<User>('users/myInfo');
  }
  guardar (body:any): Observable<any>{
    return this.apiService.post<User>('users/add',body);
  }



}
