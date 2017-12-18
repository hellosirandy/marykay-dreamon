import { animate, Component, ElementRef, OnInit, ViewChild, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-key-vision',
  templateUrl: './key-vision.component.html',
  styleUrls: ['./key-vision.component.scss'],
  animations: [
    trigger('keyImageState', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('hidden => visible', [
        animate(1500)
      ])
    ]),
    trigger('titleButtonState', [
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(200px)'
      })),
      transition('hidden => visible', [
        animate(1500)
      ])
    ])
  ]
})
export class KeyVisionComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  keyImageState = 'hidden';
  titleState = 'hidden';
  buttonState = 'hidden';

  constructor(
  ) { }

  ngOnInit() {
  }

  onAppear(which) {
    setTimeout(() => {
      if (which === 'img') {
        this.keyImageState = 'visible';
      } else if (which === 'title') {
        this.titleState = 'visible';
      } else {
        this.buttonState = 'visible';
      }
    }, 100);
  }
}
