import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentforadminService } from 'app/services/admin/studentforadmin.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  responses: object=[]

  constructor(public service: StudentforadminService, private router: Router) { }
  ngOnInit(): void {
    this.getStudent();
  }

  addStudent(): void {
    this.router.navigateByUrl('add/student');
  }

  getStudent(): void {
    this.service.fetchStudent().subscribe(
      (response: any) => {
          if (response) {
              this.responses = response
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
