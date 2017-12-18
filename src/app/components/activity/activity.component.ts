import { Component, ElementRef, OnInit, ViewChild, animate, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  animations: [
    trigger('titleState', [
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(100px)'
      })),
      transition('hidden => visible', [
        animate('1.5s ease')
      ])
    ]),
    trigger('contentState', [
      state('visible', style({
        opacity: 1,
      })),
      state('hidden', style({
        opacity: 0,
      })),
      transition('hidden => visible', [
        animate('1.5s ease')
      ])
    ])
  ]
})
export class ActivityComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  titleState = 'hidden';
  somethingState = 'hidden';
  firstSubtitleState = 'hidden';
  firstContentState = 'hidden';
  secondSubtitleState = 'hidden';
  secondContentState = 'hidden';

  constructor() { }

  ngOnInit() {
  }

  onAppear(which) {
    this[which] = 'visible';
  }

}
