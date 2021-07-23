import { Component, OnInit } from '@angular/core';
import { AttendenceForStudentService } from 'app/services/student/attendence-for-student.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  responses: object=[]

  constructor(public service: AttendenceForStudentService) { }

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

}
