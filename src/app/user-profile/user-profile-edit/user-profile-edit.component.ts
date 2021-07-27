import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  user_name: string='';
  user_designation: string='';
  user_email: string='';
  user_password: string='';
  user_confirm_password: string='';
  user_new_password: string='';
  user_id=0;


  constructor(private router:Router) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("isLoggedIn"));
    this.user_name = user.data.name;
    this.user_designation = user.data.designation;
    this.user_email = user.data.email;
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
      "Designation": this.user_designation,
      "Email": this.user_email,
      "Password": this.user_password,
      "Roles": "admin",
    }
    // this.service.saveStudentEditedInfo(body).subscribe(
    //   (response: any) => {
    //       if (response) {
    //          alert("Student Informations changed");
    //          localStorage.removeItem('isLoggedIn');
    //          this.router.navigateByUrl('login');
    //       }
    //       else {
    //           console.log("not succeed");
    //       }
    //   },
    //   error => {                             
    //       alert('Please Try Again');
    //   }
    // );
  }

}
