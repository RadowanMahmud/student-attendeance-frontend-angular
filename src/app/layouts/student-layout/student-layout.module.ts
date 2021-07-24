import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentLayoutRoutes } from './student-layout.routing';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { StudentDashboardComponent } from 'app/student-pages/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from 'app/student-pages/student-profile/student-profile.component';
import { DailyReportComponent } from 'app/student-pages/reports/daily-report/daily-report.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StudentLayoutRoutes),
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
    StudentDashboardComponent,
    StudentProfileComponent,
    DailyReportComponent
  ]
})

export class StudentLayoutModule {}
