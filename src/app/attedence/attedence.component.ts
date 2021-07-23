import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attedence',
  templateUrl: './attedence.component.html',
  styleUrls: ['./attedence.component.css']
})
export class AttedenceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addAttendence(): void{
    this.router.navigateByUrl('add/attendence');
  }

}
