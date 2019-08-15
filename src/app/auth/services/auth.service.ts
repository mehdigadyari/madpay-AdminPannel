import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

baseUrl = 'http://localhost:1684/site/admin/auth/';

constructor(private http: HttpClient) { }

login(model : any){
  return this.http.post(this.baseUrl + 'login' , model).pipe(
    map((resp : any) => {
      const user = resp;
      if(user) {
        localStorage.setItem('token' , user.token);
      }
    })
  );
}
register(model: any) {
  return this.http.post(this.baseUrl + 'register', model);
}
}
