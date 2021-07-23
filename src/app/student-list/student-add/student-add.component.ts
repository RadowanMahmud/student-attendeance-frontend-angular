import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentforadminService } from 'app/services/admin/studentforadmin.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(public service: StudentforadminService, private router: Router) { }

  ngOnInit(): void {
  }

  saveStudent(): void {
    this.service.addNewSTudent().subscribe(
      (response: any) => {
            this.service.studentAddForm.reset();
            this.router.navigateByUrl('student/list');
      },
      error => {                             
          alert('Something went wrong');
      }
    );
  }

}
