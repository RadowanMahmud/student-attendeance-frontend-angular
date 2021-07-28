import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminManageService {

  constructor(private http: HttpClient, private formbuilder: FormBuilder) { }

  public fetchAdmin() {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>("http://localhost:52684/api/admins" , header)
  }

  public addAdmin(body) {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.post<any>("http://localhost:52684/api/admins/register" ,body , header)
  }
}
