import { Routes } from '@angular/router';

import { PublicBaseComponent } from './components/public-base/public-base.component';
import { PrivateBaseComponent } from './components/private-base/private-base.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

export const appRoutes: Routes = [{
    path: "",
    component: PublicBaseComponent,
    children: [{
        path: "",
        component: HomeComponent
    }]
}, {
    path: "project",
    component: PrivateBaseComponent,
    children: [{
        path: "dashboard",
        component: DashboardComponent
    }]
}, {
    path: "user",
    component: PrivateBaseComponent
}];