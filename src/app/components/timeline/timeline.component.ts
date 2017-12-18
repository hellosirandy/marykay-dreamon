import { Component, ElementRef, OnInit, ViewChild, animate, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
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
        animate('2s ease')
      ])
    ]),
    trigger('lineState', [
      state('visible', style({
        transform: 'translateY(0)'
      })),
      state('hidden', style({
        transform: 'translateY(50%)'
      })),
      transition('hidden => visible', [
        animate('1.5s ease')
      ])
    ])
  ]
})
export class TimelineComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  titleState = 'hidden';
  somethingState = 'hidden';
  subtitleState = 'hidden';
  lineState = 'hidden';

  items = [
    { titleLeft: true, title: 'JAN', subtitle: 'JAN - FEB',
      content: {
        title: '一月底：MK品牌經理活動報名開始',
        paragraphs: ['MK品牌經理活動報名開始，前往 MaryKayTaiwan校園品牌經理徵選活動頁面，滑到頁面最下方，同校三到五人一組，一人為代表報名，並提交MK粉紅的逆襲-品牌扭轉兩頁企劃書']
      }
    },
    { titleLeft: false, title: 'MAR', subtitle: 'MAR - APR',
      content: {
        title: '三月初：公布階段一前十強',
        paragraphs: ['三月中 - 四月中', '階段二 - 發揮社群影響力！進行為期一個月的 #MaryKayChellenges']
      }
    },
    { titleLeft: true, title: 'APR', subtitle: 'End of APR', content: '公布前五組' },
    { titleLeft: true, title: 'MAY', subtitle: '',
      content: {
        title: '階段三，動手操作！',
        paragraphs: ['實際執行粉紅開花校園計畫', '於階段二選出前五強，玫琳凱將展開1對1企業導師計畫，除撰寫完整粉紅開花校園計畫書並實際於校園執行企劃書內容']
      }
    },
    { titleLeft: true, title: '', subtitle: 'End of MAY', content: '公布前三組' },
    { titleLeft: true, title: 'JUN', subtitle: '', content: '前進達拉斯！' }
  ];
  constructor() { }

  ngOnInit() {
  }

  onAppear(which) {
    this[which] = 'visible';
  }

}
