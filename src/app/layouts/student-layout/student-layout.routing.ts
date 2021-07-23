import { Routes } from '@angular/router';

import { StudentDashboardComponent } from 'app/student-pages/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from 'app/student-pages/student-profile/student-profile.component';
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
    { path: 'stu/dashboard', component: StudentDashboardComponent},
    { path: 'stu/profile',  component: StudentProfileComponent },
];