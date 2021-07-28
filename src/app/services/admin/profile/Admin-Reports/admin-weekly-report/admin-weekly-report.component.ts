import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-admin-weekly-report',
  templateUrl: './admin-weekly-report.component.html',
  styleUrls: ['./admin-weekly-report.component.css']
})
export class AdminWeeklyReportComponent implements OnInit {

  responses: object=[];
  constructor(public service: ProfileService) { }

  ngOnInit(): void {
    this.getWeeklyReport();
  }

  getWeeklyReport(): void{
    this.service.fetchWeeklyAttendenceReport().subscribe(
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
