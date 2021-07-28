import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-admin-monthly-report',
  templateUrl: './admin-monthly-report.component.html',
  styleUrls: ['./admin-monthly-report.component.css']
})
export class AdminMonthlyReportComponent implements OnInit {
  selectedMonth: string='';
  responses: object= [];

  constructor(public service: ProfileService) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("isLoggedIn"));
  }

  getMonthlyReport(): void{
    this.service.fetchMonthlyAttendenceReport(this.selectedMonth).subscribe(
      (response: any) => {
          if (response) {
            this.responses = response;
            // console.log(this.responses);
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
