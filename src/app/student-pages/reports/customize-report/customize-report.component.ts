import { Component, OnInit } from '@angular/core';
import { ReportService } from 'app/services/student/report/report.service';

@Component({
  selector: 'app-customize-report',
  templateUrl: './customize-report.component.html',
  styleUrls: ['./customize-report.component.css']
})
export class CustomizeReportComponent implements OnInit {

  
  startDate: string='';
  endDate: string='';
  responses: object= [];

  constructor(public service: ReportService) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("isLoggedIn"));
  }

  getReport(): void{
    this.service.fetchCustomizedReport(this.startDate,this.endDate).subscribe(
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
