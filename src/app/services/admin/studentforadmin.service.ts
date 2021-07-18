import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentforadminService {

  constructor(private http: HttpClient, private formbuilder: FormBuilder) { }

  public fetchStudent() {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>("http://localhost:52684/api/students" , header)
  }

  public addNewSTudent() {

    var user = JSON.parse( localStorage.getItem('isLoggedIn'));

    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${user.token}`)
    }
    var body = {
      "Name": this.studentAddForm.value.Name,
      "Roll": this.studentAddForm.value.Roll,
      "Phone": this.studentAddForm.value.Phone,
      "Session": this.studentAddForm.value.Session,
      "Email": this.studentAddForm.value.Email,
      "Password": this.studentAddForm.value.Password,
      "Roles": "student",
    }

     return this.http.post<any>("http://localhost:52684/api/students" , body, header);
  }
  studentAddForm = this.formbuilder.group({
    Name: ['', Validators.required],
    Roll: ['', Validators.required],
    Phone: ['', Validators.required],
    Session: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
  });
}
