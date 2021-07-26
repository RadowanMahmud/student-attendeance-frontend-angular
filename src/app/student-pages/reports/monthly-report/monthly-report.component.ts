import { Component, OnInit } from '@angular/core';
import { ReportService } from 'app/services/student/report/report.service';

@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.css']
})
export class MonthlyReportComponent implements OnInit {
  selectedMonth: string='';
  responses: object= [];
  user_name: string='';
  user_roll: string='';

  constructor(public service: ReportService) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("isLoggedIn"))
    this.user_name = user.data.name
    this.user_roll = user.data.roll
  }

  getMonthlyReport(): void{
    this.service.fetchMonthlyAttendenceReport(this.selectedMonth).subscribe(
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
