import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendenceForStudentService } from 'app/services/student/attendence-for-student.service';

@Component({
  selector: 'app-student-profile-edit',
  templateUrl: './student-profile-edit.component.html',
  styleUrls: ['./student-profile-edit.component.css']
})
export class StudentProfileEditComponent implements OnInit {

  user_name: string='';
  user_roll: string='';
  user_phone: string='';
  user_session: string='';
  user_email: string='';
  user_password: string='';
  user_confirm_password: string='';
  user_new_password: string='';
  user_id=0;


  constructor(public service: AttendenceForStudentService,private router:Router) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("isLoggedIn"));
    this.user_name = user.data.name;
    this.user_roll = user.data.roll;
    this.user_phone = user.data.phone;
    this.user_email = user.data.email;
    this.user_session = user.data.session;
    this.user_password = user.data.password;
    this.user_id = user.data.id
  }

  saveEditedInfo(): void{
    console.log('calling');
    if(this.user_new_password.length > 0){
      if(this.user_confirm_password != this.user_password){
        alert('Password and Confirm Password do not match');
        return;
      }
      else{
        if(this.user_new_password.length >= 6){
            this.user_password = this.user_new_password;
        }else{
          alert("Password must contain at least 6 characters");
          return;
        }
      }
    }
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
    this.service.saveStudentEditedInfo(body).subscribe(
      (response: any) => {
          if (response) {
             alert("Student Informations changed");
             localStorage.removeItem('isLoggedIn');
             this.router.navigateByUrl('login');
          }
          else {
              console.log("not succeed");
          }
      },
      error => {                             
          alert('Please Try Again');
      }
    );
  }

}
