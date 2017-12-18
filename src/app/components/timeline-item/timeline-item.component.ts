import { Component, Input, OnInit, animate, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
  animations: [
    trigger('contentState', [
      state('visible', style({
        opacity: 1,
      })),
      state('hidden', style({
        opacity: 0,
      })),
      transition('hidden => visible', [
        animate('2.5s ease')
      ])
    ])
  ]
})
export class TimelineItemComponent implements OnInit {
  @Input() item;
  state = 'hidden';

  constructor() { }

  ngOnInit() {
  }

  onAppear(which) {
    this[which] = 'visible';
  }

}
