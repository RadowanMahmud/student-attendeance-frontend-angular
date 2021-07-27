import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AttendenceForAdminService {

  constructor(private http: HttpClient, private formbuilder: FormBuilder) { }

  public fetchAttendence() {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>("http://localhost:52684/api/attendances" , header)
  }

  public addNewAttendence() {

    var user = JSON.parse( localStorage.getItem('isLoggedIn'));

    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${user.token}`)
    }
    var body = {
      "Title": this.attendenceAddForm.value.Title,
      "AdminId": user.data.id,
      "StartTime": this.attendenceAddForm.value.StartTime,
      "EndTime": this.attendenceAddForm.value.EndTime,
    }
     return this.http.post<any>("http://localhost:52684/api/attendances" , body, header);
  }
  public saveAttendenceEditInfo(id,body) {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
    return this.http.put<any>(`http://localhost:52684/api/attendances/${id}`,body,header);
  }

  public deleteAttendence(id) {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
    return this.http.delete<any>(`http://localhost:52684/api/attendances/${id}`,header);
  }

  

  attendenceAddForm = this.formbuilder.group({
    Title: ['', Validators.required],
    StartTime: ['', Validators.required],
    EndTime: ['', Validators.required],
  });
}
