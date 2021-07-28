import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  public fetchDailyAttendenceReport() {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>(`http://localhost:52684/api/records/reports/daily/${user.data.id}` , header)
  }

  public fetchMonthlyAttendenceReport(date: string) {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>(`http://localhost:52684/api/records/reports/monthly/${date}/${user.data.id}` , header)
  }

  public fetchCustomizedReport(startDate: string,endDate: string) {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>(`http://localhost:52684/api/records/reports/customized/${startDate}/${endDate}/${user.data.id}` , header)
  }

  public fetchWeeklyAttendenceReport() {
    var user = JSON.parse( localStorage.getItem('isLoggedIn'));
   
    var header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${user.token}`)
    }
      
    return this.http.get<any>(`http://localhost:52684/api/records/reports/weekly/${user.data.id}` , header)
  }
}
