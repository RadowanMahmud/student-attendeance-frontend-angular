import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public saveAdminProfileEditedInfo(body) {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
    return this.http.put<any>(`http://localhost:52684/api/admins/${user.data.id}`,body,header);
  }

  public fetchDailyAttendenceReport() {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>(`http://localhost:52684/api/records/admin/reports/daily/${user.data.id}` , header)
  }

  public fetchWeeklyAttendenceReport() {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>(`http://localhost:52684/api/records/admin/reports/weekly/${user.data.id}` , header)
  }

  public fetchCustomizeAttendenceReport(startdate,enddate) {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>(`http://localhost:52684/api/records/admin/reports/customized/${startdate}/${enddate}/${user.data.id}` , header)
  }

  
  public fetchMonthlyAttendenceReport(date: string) {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>(`http://localhost:52684/api/records/admin/reports/monthly/${date}/${user.data.id}` , header)
  }
}
