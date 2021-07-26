import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("isLoggedIn"));
    this.user_name = user.data.name;
    this.user_roll = user.data.roll;
    this.user_phone = user.data.phone;
    this.user_email = user.data.email;
    this.user_session = user.data.session;
    this.user_password = user.data.password;
  }



}
