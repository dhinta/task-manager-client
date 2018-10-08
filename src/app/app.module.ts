import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { PublicBaseComponent } from './components/layouts/public-base/public-base.component';
import { PrivateBaseComponent } from './components/layouts/private-base/private-base.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

import { SharedModule } from './modules/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RetrieveCredentialsComponent } from './components/retrieve-credentials/retrieve-credentials.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SiteDownComponent } from './components/pages/site-down/site-down.component';
import { SiteDescriptionModalComponent } from './components/site-description-modal/site-description-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicBaseComponent,
    PrivateBaseComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RetrieveCredentialsComponent,
    RegistrationComponent,
    SiteDownComponent,
    SiteDescriptionModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,

    //Custom Module
    SharedModule
  ],
  providers: [],
  entryComponents: [SiteDescriptionModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
