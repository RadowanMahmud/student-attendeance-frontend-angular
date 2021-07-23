import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendenceForAdminService } from 'app/services/admin/attendence-for-admin.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-attedence',
  templateUrl: './add-attedence.component.html',
  styleUrls: ['./add-attedence.component.css']
})
export class AddAttedenceComponent implements OnInit {

  constructor(public service: AttendenceForAdminService, private router: Router) { }

  ngOnInit(): void {
  }

  saveAttendence(): void{
    this.service.addNewAttendence().subscribe(
      (response: any) => {
            this.service.attendenceAddForm.reset();
            this.router.navigateByUrl('attendence');
      },
      error => {                             
          alert('Something went wrong');
      }
  );
  }

}
