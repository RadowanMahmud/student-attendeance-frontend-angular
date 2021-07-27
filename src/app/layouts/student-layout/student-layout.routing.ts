import { Routes } from '@angular/router';

import { StudentDashboardComponent } from 'app/student-pages/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from 'app/student-pages/student-profile/student-profile.component';
import { DailyReportComponent } from 'app/student-pages/reports/daily-report/daily-report.component';
import { MonthlyReportComponent } from 'app/student-pages/reports/monthly-report/monthly-report.component';
import { WeeklyReportComponent } from 'app/student-pages/reports/weekly-report/weekly-report.component';
import { StudentProfileEditComponent } from 'app/student-pages/student-profile-edit/student-profile-edit.component';
// import { YourGuardGuard } from '../../your-guard.guard';

export const StudentLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'user-profile', component: UserProfileComponent, },
    // { path: 'table-list', component: TableListComponent },
    // { path: 'typography', component: TypographyComponent },
    { path: 'dashboard', component: StudentDashboardComponent},
    { path: 'profile',  component: StudentProfileComponent },
    { path: 'reports-daily', component: DailyReportComponent},
    { path: 'reports-monthly', component: MonthlyReportComponent},
    { path: 'reports-weekly', component: WeeklyReportComponent},
    { path: 'profile-edit', component: StudentProfileEditComponent},
];