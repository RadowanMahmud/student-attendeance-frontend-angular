import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { StudentListComponent } from 'app/student-list/student-list.component';
import { YourGuardGuard } from '../../your-guard.guard';
import { StudentAddComponent } from 'app/student-list/student-add/student-add.component';
import { AttedenceComponent } from 'app/attedence/attedence.component';
import { AddAttedenceComponent } from 'app/attedence/add-attedence/add-attedence.component';
import { UserProfileEditComponent } from 'app/user-profile/user-profile-edit/user-profile-edit.component';

export const AdminLayoutRoutes: Routes = [
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
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent, },
    { path: 'user-profile-edit', component: UserProfileEditComponent},
    { path: 'student/list', component: StudentListComponent},
    { path: 'add/student', component: StudentAddComponent},
    { path: 'attendence', component: AttedenceComponent},
    { path: 'add/attendence', component: AddAttedenceComponent},

];