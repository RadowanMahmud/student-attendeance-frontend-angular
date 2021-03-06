import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import * as $ from "jquery";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  private _router: Subscription;


    constructor(public location: Location, private router: Router) {
       
    }

  ngOnInit() {
      if (!localStorage.getItem('isLoggedIn')) {
          this.router.navigateByUrl('login');
      }else{
        var user = JSON.parse( localStorage.getItem('isLoggedIn'));
        if(user.data.roles == 'student'){
            this.router.navigateByUrl('student');
        }
      }
  }
 
}
