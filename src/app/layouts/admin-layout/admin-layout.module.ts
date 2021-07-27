import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { StudentListComponent } from 'app/student-list/student-list.component';
import { StudentAddComponent } from 'app/student-list/student-add/student-add.component';
import { AttedenceComponent } from 'app/attedence/attedence.component';
import { AddAttedenceComponent } from 'app/attedence/add-attedence/add-attedence.component';
import { UserProfileEditComponent } from 'app/user-profile/user-profile-edit/user-profile-edit.component';
import { AdminDailyReportComponent } from 'app/services/admin/profile/Admin-Reports/admin-daily-report/admin-daily-report.component';
import { AdminWeeklyReportComponent } from 'app/services/admin/profile/Admin-Reports/admin-weekly-report/admin-weekly-report.component';
import { AdminMonthlyReportComponent } from 'app/services/admin/profile/Admin-Reports/admin-monthly-report/admin-monthly-report.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    StudentListComponent,
    StudentAddComponent,
    AttedenceComponent,
    AddAttedenceComponent,
    UserProfileEditComponent,
    AdminDailyReportComponent,
    AdminWeeklyReportComponent,
    AdminMonthlyReportComponent
  ]
})

export class AdminLayoutModule {}
