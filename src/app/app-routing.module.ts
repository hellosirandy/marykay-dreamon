import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { ApplyPageComponent } from './components/apply-page/apply-page.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'register', component: ApplyPageComponent }
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
