import { Component, OnInit } from '@angular/core';
import { AttendenceForStudentService } from 'app/services/student/attendence-for-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  responses: object=[];
  selectedMonth: string='';

  constructor(public service: AttendenceForStudentService,private router: Router) { }

  ngOnInit(): void {
    //console.log('hi')
    this.getCurrentAttendence();
  }

  getCurrentAttendence(): void {
    this.service.fetchAttendence().subscribe(
      (response: any) => {
          if (response) {
              this.responses = []
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
  saveAttendence(id): void{
    this.service.saveAttendenceRecord(id).subscribe(
      (response: any) => {
          if (response) {
             alert("Attendence Saved");
             this.getCurrentAttendence();
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

  getMonthlyReport(): void{
    console.log('hello' + this.selectedMonth);
  }

  navigate(path): void{
    this.router.navigateByUrl(path);
  }

}
