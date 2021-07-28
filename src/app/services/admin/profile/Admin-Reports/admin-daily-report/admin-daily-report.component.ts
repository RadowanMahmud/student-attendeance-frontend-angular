import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-admin-daily-report',
  templateUrl: './admin-daily-report.component.html',
  styleUrls: ['./admin-daily-report.component.css']
})
export class AdminDailyReportComponent implements OnInit {

  responses: object=[];
  constructor(public service: ProfileService) { }

  ngOnInit(): void {
    this.getDailyReport();
  }

  getDailyReport(): void{
    this.service.fetchDailyAttendenceReport().subscribe(
      (response: any) => {
          if (response) {
            this.responses = response;
            console.log('Howdy');
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
