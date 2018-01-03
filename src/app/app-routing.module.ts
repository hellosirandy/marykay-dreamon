import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { ApplyPageComponent } from './components/apply-page/apply-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { SingleApplicationPageComponent } from './components/single-application-page/single-application-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginPageComponent } from './components/login-page/login-page.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'register', component: ApplyPageComponent },
  { path: 'admin', canActivate: [AuthGuardService], component: AdminPageComponent },
  { path: 'admin/:id', canActivate: [AuthGuardService], component: SingleApplicationPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
