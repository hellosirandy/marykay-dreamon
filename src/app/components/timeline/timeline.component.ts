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
        title: '活動開跑！</br>(線上報名 + 投遞兩夜計畫書):',
        paragraphs: ['前往Dream On! 美商玫琳凱台灣區校園品牌經理徵選大賽活動官網報名區以隊伍為單位填寫團隊資料(一人為代表報名)，並提交Mary Kay的逆襲-品牌扭轉乾坤兩頁企劃書。',
          '〔什麼是Mary Kay的逆襲-品牌扭轉乾坤？〕<br>你知道直銷是什麼嗎？玫琳凱這麼優秀的企業卻深受直銷的困擾！因此我們想請優秀的你妳你，一起來重新形塑玫琳凱台灣的形象！']
      }
    },
    { titleLeft: false, title: 'MAR', subtitle: 'MAR - APR',
      content: {
        title: '公布前八強',
        paragraphs: ['入闈前八強的隊伍，玫琳凱將提供產品訓練、企業品牌文化經營等課程讓參賽隊伍有更多背景知識來執行接下來為期一個月的的#MaryKaychallenges。']
      }
    },
    { titleLeft: true, title: '', subtitle: '',
      content: {
        title: '階段三，動手操作！',
        paragraphs: ['實際執行粉紅開花校園計畫', '於階段二選出前五強，玫琳凱將展開1對1企業導師計畫，除撰寫完整粉紅開花校園計畫書並實際於校園執行企劃書內容。']
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
