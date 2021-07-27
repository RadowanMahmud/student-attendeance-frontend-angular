import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user_name: string='';
  user_designation: string='';
  user_email: string='';

  constructor(public service: AuthService, private router: Router) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("isLoggedIn"));
    this.user_name = user.data.name;
    this.user_designation = user.data.designation;
    this.user_email = user.data.email;
  }

  navigate(path): void{
    this.router.navigateByUrl(path);
  }

}
