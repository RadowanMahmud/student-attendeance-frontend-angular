import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-admin-customize-report',
  templateUrl: './admin-customize-report.component.html',
  styleUrls: ['./admin-customize-report.component.css']
})
export class AdminCustomizeReportComponent implements OnInit {

  startDate: string='';
  endDate: string='';
  responses: object= [];

  constructor(public service: ProfileService) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("isLoggedIn"));
  }

  getReport(): void{
    this.service.fetchCustomizeAttendenceReport(this.startDate,this.endDate).subscribe(
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
