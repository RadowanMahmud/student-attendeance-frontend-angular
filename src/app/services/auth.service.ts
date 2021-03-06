import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private formbuilder: FormBuilder, private http: HttpClient) { } 

    public authUrl = "http://localhost:5000/api/login/authenticate";

    public adminSignInOperation() {
        var body = {
            "email": this.adminSignInformModel.value.email,
            "password": this.adminSignInformModel.value.password,
            "role": this.adminSignInformModel.value.role,
        }

        return this.http.post<any>(this.authUrl , body);
    }

    public testing() {
        var user = JSON.parse( localStorage.getItem('isLoggedIn'));
       
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${user.token}`)
          }
          
        return this.http.get<any>("http://localhost:5000/api/admins" , header)
    }

    adminSignInformModel = this.formbuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        role: ['', Validators.required],
    });

}
