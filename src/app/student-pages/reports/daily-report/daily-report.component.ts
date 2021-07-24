import { Component, OnInit } from '@angular/core';
import { ReportService } from 'app/services/student/report/report.service';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {
  responses: object= [];
  user_name: string='';
  user_roll: string='';

  constructor(public service: ReportService) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("isLoggedIn"))
    this.user_name = user.data.name
    this.user_roll = user.data.roll
    this.getDailyReport()
  }

  getDailyReport(): void{
    this.service.fetchDailyAttendenceReport().subscribe(
      (response: any) => {
          if (response) {
            this.responses = response;
            console.log(this.responses);
          }
          else {
              console.log("not succeed");
          }
      },
      error => {                             
          alert('Please Reload');
      }
    );
  }

}
