import { Routes } from '@angular/router';

import { PublicBaseComponent } from './components/layouts/public-base/public-base.component';
import { PrivateBaseComponent } from './components/layouts/private-base/private-base.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ValidationRulesResolverService } from './modules/shared/services/validation-rules-resolver.service';
import { SiteDownComponent } from './components/pages/site-down/site-down.component';
import { LoginGuardService } from './services/login-guard.service';
import { LoadUserDataService } from './services/load-user-data.service';

export const appRoutes: Routes = [
  {
    path: '',
    component: PublicBaseComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        resolve: {
          validationRuleSet: ValidationRulesResolverService
        },
        canActivate: [LoginGuardService],
        data: {
          loginPage: true
        }
      },
      {
        path: 'site-down',
        component: SiteDownComponent
      }
    ]
  },
  {
    path: 'project',
    component: PrivateBaseComponent,
    canActivate: [LoginGuardService],
    resolve: {
      userInfo: LoadUserDataService
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: 'user',
    component: PrivateBaseComponent
  }
];
