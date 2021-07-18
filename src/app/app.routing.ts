import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { from } from 'rxjs';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  {
      path: 'login',
      component: LoginLayoutComponent,
  },
  {
    path: 'student',
    component: StudentLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/student-layout/student-layout.module#StudentLayoutModule'
    }]
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
