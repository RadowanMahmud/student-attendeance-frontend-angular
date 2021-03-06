import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/student/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/student/profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/student/reports-customize', title: 'Customize Report', icon:'library_books',class:''}
];
@Component({
  selector: 'app-student-sidebar',
  templateUrl: './student-sidebar.component.html',
  styleUrls: ['./student-sidebar.component.css']
})
export class StudentSidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigateByUrl('login');
  }

}
