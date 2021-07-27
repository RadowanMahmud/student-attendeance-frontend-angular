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
  selectedForDeleteId=0;
  user_name: string='';
  user_roll: string='';
  user_phone: string='';
  user_session: string='';
  user_email: string='';
  user_password: string='';
  user_id=0;

  constructor(public service: StudentforadminService, private router: Router) { }
  ngOnInit(): void {
    this.getStudent();
  }

  addStudent(): void {
    this.router.navigateByUrl('add/student');
  }

  onSelectDelete(id): void{
    this.selectedForDeleteId =id
  }

  onSelectEdite(data): void{
    this.user_name = data.name;
    this.user_roll = data.roll;
    this.user_phone = data.phone;
    this.user_email = data.email;
    this.user_session = data.session;
    this.user_password = data.password;
    this.user_id = data.id
  }

  onConfirmDelete(): void{
    this.service.deleteStudent(this.selectedForDeleteId).subscribe(
      (response: any) => {
          alert('student deleted');
          this.getStudent();
      },
      error => {                             
          alert('Please Reload');
      }
    );
  }

  onConfirmEdit(): void{
    var body = {
      "Id": this.user_id,
      "Name": this.user_name,
      "Roll": this.user_roll,
      "Phone": this.user_phone,
      "Session": this.user_session,
      "Email": this.user_email,
      "Password": this.user_password,
      "Roles": "student",
    }
    this.service.saveStudentEditedInfo(this.user_id,body).subscribe(
      (response: any) => {
          alert('Student Information Edited');
          this.getStudent();
      },
      error => {                             
          alert('Please Reload');
      }
    );
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
