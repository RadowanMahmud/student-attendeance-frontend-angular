import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  user_name: string='';
  user_roll: string='';
  user_phone: string='';
  user_session: string='';
  user_email: string='';

  constructor(private router:Router) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("isLoggedIn"));
    this.user_name = user.data.name;
    this.user_roll = user.data.roll;
    this.user_phone = user.data.phone;
    this.user_email = user.data.email;
    this.user_session = user.data.session;
  }

  navigate(path): void{
    this.router.navigateByUrl(path);
  }

}
