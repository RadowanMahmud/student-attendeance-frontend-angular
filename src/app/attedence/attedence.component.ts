import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendenceForAdminService } from 'app/services/admin/attendence-for-admin.service';
import * as moment from 'moment';


@Component({
  selector: 'app-attedence',
  templateUrl: './attedence.component.html',
  styleUrls: ['./attedence.component.css']
})
export class AttedenceComponent implements OnInit {

  responses: object=[]
  constructor(public service: AttendenceForAdminService, private router: Router) { }

  ngOnInit(): void {
    this.getAttendence()
  }

  getDate(date: string): string{
    console.log('calling')
    return moment().format('LLLL')
  }

  addAttendence(): void{
    this.router.navigateByUrl('add/attendence');
  }
  getAttendence(): void {
    this.service.fetchAttendence().subscribe(
      (response: any) => {
          if (response) {
              this.responses = response
              console.log(this.responses);
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
