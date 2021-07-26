import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendenceForStudentService {

  constructor(private http: HttpClient) { }

  public fetchAttendence() {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>(`http://localhost:52684/api/attendances/current/${user.data.id}` , header)
  }

  public saveAttendenceRecord(attendancesId) {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    var body = {
      "attendancesId": attendancesId,
      "GivenTime": new Date(),
      "StudentId": user.data.id,
    }
    return this.http.post<any>("http://localhost:52684/api/records",body,header)
  }

  public saveStudentEditedInfo(body) {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
    return this.http.put<any>(`http://localhost:52684/api/students/${user.data.id}`,body,header);
  }


}
