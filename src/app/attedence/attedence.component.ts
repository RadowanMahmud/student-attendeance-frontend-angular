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

  selectedForDeleteid=0;
  title: string='';
  startTime: string='';
  endTime: string='';
  adminId=0;
  editattid=0;

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

  onSelectEdit(att): void{
    this.title = att.title;
    this.startTime = att.startTime;
    this.endTime = att.endTime;
    this.adminId = att.adminId;
    this.editattid = att.id
  }

  onEditConfirm(): void{
    var body = {
      "Title": this.title,
      "AdminId": this.adminId,
      "StartTime": this.startTime,
      "EndTime": this.endTime,
      "Id": this.editattid,
    }
    this.service.saveAttendenceEditInfo(this.editattid,body).subscribe(
      (response: any) => {
            this.getAttendence()         
      },
      error => {                             
          alert('Please Reload');
      }
    );
  }

  onSelectDelete(id): void{
    this.selectedForDeleteid = id
  }
  deleteAttendence(): void{
    this.service.deleteAttendence(this.selectedForDeleteid).subscribe(
      (response: any) => {
          if (response) {
            alert("Attendence Deleted");
            this.getAttendence()
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
