import { Component, OnInit } from '@angular/core';
import { AdminManageService } from 'app/services/admin/admin-manage.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  name: string='';
  email: string='';
  designation: string='';
  password: string='';

  responses: object=[];

  constructor(public service: AdminManageService) { }

  ngOnInit(): void {
    this.getAdmin()
  }

  getAdmin(): void{
    this.service.fetchAdmin().subscribe(
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

  saveAdmin(): void{
    var body= {
        "Name" : this.name,
        "Email" : this.email,
        "Designation" : this.designation,
        "Password" : this.password,
        "Roles": "admin",
    }
    this.service.addAdmin(body).subscribe(
      (response: any) => {
          this.getAdmin();
      },
      error => {                             
          alert('Please Reload');
      }
    );
  }

}
