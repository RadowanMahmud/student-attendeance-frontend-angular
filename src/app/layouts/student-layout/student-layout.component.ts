import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.css']
})
export class StudentLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigateByUrl('login');
    }else{
      var user = JSON.parse( localStorage.getItem('isLoggedIn'));
      if(user.data.roles == 'admin'){
          this.router.navigateByUrl('dashboard');
      }
    }
  }

}
