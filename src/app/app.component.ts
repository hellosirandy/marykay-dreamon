import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Section } from './enums/section.enum';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/startWith';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedSection = Section.Home;
  navbarSection: Section;

  constructor(
    private scroll: ScrollService
  ) {}

  handleNavbarButtonClick(section: Section) {
    this.navbarSection = section;
  }

  scrollToElement(event) {
    this.selectedSection = event;
  }
}
