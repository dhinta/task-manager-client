import { Routes } from "@angular/router";

import { PublicBaseComponent } from "./components/layouts/public-base/public-base.component";
import { PrivateBaseComponent } from "./components/layouts/private-base/private-base.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { DashboardComponent } from "./components/pages/dashboard/dashboard.component";
import { ValidationRulesResolverService } from "./modules/shared/services/validation-rules-resolver.service";
import { SiteDownComponent } from "./components/pages/site-down/site-down.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: PublicBaseComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        resolve: {
          validationRules: ValidationRulesResolverService
        }
      },
      {
        path: "site-down",
        component: SiteDownComponent
      }
    ]
  },
  {
    path: "project",
    component: PrivateBaseComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      }
    ]
  },
  {
    path: "user",
    component: PrivateBaseComponent
  }
];
