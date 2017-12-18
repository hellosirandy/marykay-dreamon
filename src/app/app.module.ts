import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { KeyVisionComponent } from './components/key-vision/key-vision.component';
import { AboutComponent } from './components/about/about.component';
import { AppearDirective } from './directives/appear.directive';
import { ActivityComponent } from './components/activity/activity.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineItemComponent } from './components/timeline-item/timeline-item.component';
import { RewardComponent } from './components/reward/reward.component';
import { ApplyComponent } from './components/apply/apply.component';
import { LandingComponent } from './components/landing/landing.component';

import { ScrollService } from './services/scroll.service';
import { AppRoutingModule } from './app-routing.module';
import { ApplyPageComponent } from './components/apply-page/apply-page.component';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KeyVisionComponent,
    AboutComponent,
    AppearDirective,
    ActivityComponent,
    TimelineComponent,
    TimelineItemComponent,
    RewardComponent,
    ApplyComponent,
    LandingComponent,
    ApplyPageComponent,
    ApplyFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    ScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
