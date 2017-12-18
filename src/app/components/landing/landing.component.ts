import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Section } from '../../enums/section.enum';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/startWith';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnDestroy, OnInit {
  @ViewChild('home') home;
  @ViewChild('about') about;
  @ViewChild('activity') activity;
  @ViewChild('timeline') timeline;
  @ViewChild('reward') reward;
  @ViewChild('apply') apply;

  currentElement: Section;

  scrollSub: Subscription;

  constructor(
    private scroll: ScrollService
  ) { }

  ngOnInit() {
    this.scrollSub = Observable.fromEvent(window, 'scroll').startWith(null)
    .subscribe(() => {
      const offset = window.scrollY;
      const elements = Object.keys(Section).map((key) => Section[key]);
      let prev = null;
      for (const el of elements) {
        if (offset >= this.getPosition(this[el])) {
          prev = el;
          if (elements.indexOf(el) === elements.length - 1) {
            this.currentElement = el;
          }
        } else {
          if (prev) {
            this.currentElement = prev;
            break;
          }
        }
      }
    });
  }

  ngOnDestroy() {
    this.scrollSub.unsubscribe();
  }

  getPosition(ele) {
    return ele.content.nativeElement.offsetTop - 70;
  }

  handleNavbarButtonClick(event) {
    let top = this.getPosition(this[event]);
    top = top > 0 ? top : 0;
    this.scroll.smoothScrollTo(window.document.scrollingElement, top, 1500);
  }

}
