import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public service: AuthService) { }

  ngOnInit() {
    this.service.testing().subscribe(
      (response: any) => {
          if (response) {
              console.log(response)
          }
          else {
              console.log("not succeed");
          }
      }
  );
  }

}
