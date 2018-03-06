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
    { titleLeft: true, title: 'MAR', subtitle: 'MAR - APR',
      content: {
        title: '活動開跑！</br>(線上報名 + 投遞兩頁計畫書):<br>時間: 3/5 – 4/15',
        paragraphs: ['前往Dream On! 美商玫琳凱台灣區校園品牌經理徵選大賽活動官網報名區以隊伍為單位填寫團隊資料(一人為代表報名)，並提交Mary Kay的逆襲-品牌扭轉乾坤兩頁企劃書。',
          '〔什麼是Mary Kay的逆襲-品牌扭轉乾坤？〕<br>你知道直銷是什麼嗎？玫琳凱這麼優秀的企業卻深受直銷的困擾！因此我們想請優秀的你妳你，一起來重新形塑玫琳凱台灣的形象！']
      }
    },
    { titleLeft: false, title: 'MAR - APR', subtitle: '',
      content: {
        title: '公布前八強<br>時間: 4/19',
        paragraphs: ['入圍前八強的隊伍，玫琳凱將提供產品訓練、企業品牌文化經營等課程讓參賽隊伍有更多背景知識來執行接下來為期一個月的#MaryKaychallenges。']
      }
    },
    {
      titleLeft: false, title: 'APR - MAY', subtitle: '',
      content: {
        title: '社群影響力! #MaryKayChallenges<br>時間: 4/29 – 5/20',
        paragraphs: ['為期一整個月的#MaryKayChallenge參賽隊伍將運用創意、高度執行力去完成一整個月每週一次共四次的艱難任務!']
      }
    },
    { titleLeft: false, title: 'JUN', subtitle: '',
      content: {
        title: 'Dream On! 夢想大舞台<br>2018.6.2',
        paragraphs: ['以【Dream On! 玫琳凱扭轉乾坤】為題目，結合MaryKayChallenges做一個十分鐘的Presentation。最後選出前五名，頒獎典禮。']
      }
    },
    { titleLeft: true, title: 'JUN', subtitle: '', content: '公佈優勝! Dream On!' }
  ];
  constructor() { }

  ngOnInit() {
  }

  onAppear(which) {
    this[which] = 'visible';
  }

}
