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
        title: '活動開跑！</br>(線上報名 + 投遞二至六頁企畫書):<br>時間: 3/5 – 4/15',
        paragraphs: ['Action！Dream On！美商玫琳凱夢想啟動商業競賽活動官網報名區以隊伍為單位填寫團隊資料(一人為代表報名)，並提交Mary Kay的逆襲-品牌扭轉乾坤企劃書。',
          '〔什麼是MaryKay品牌翻轉企劃書？〕<br>你知道直銷是什麼嗎？玫琳凱這麼優秀的企業卻深受直銷的困擾！因此我們想請優秀的你妳你，一起來重新形塑玫琳凱台灣的形象！']
      }
    },
    { titleLeft: false, title: 'MAR - APR', subtitle: '',
      content: {
        title: '公布通過初選隊伍<br>時間: 4/19',
        paragraphs: ['通過初選的隊伍，玫琳凱將提供三場工作坊，內容包含彩妝產業概論與實務、企業主管經驗分享、個案討論、企劃書個別指導及商業競賽簡報與呈現等一系列課程']
      }
    },
    {
      titleLeft: false, title: 'APR - MAY', subtitle: '',
      content: {
        title: '社群影響力! #MaryKayChallenge<br>時間: 4/29 – 5/20',
        paragraphs: ['4/29 – 5/20進行的Mary Kay Challenge，內容包含社群媒體與創意方案的提案分析、實際執行及成效檢討。']
      }
    },
    { titleLeft: false, title: 'JUN', subtitle: '',
      content: {
        title: 'Dream On! 夢想大舞台<br>時間: 6/2',
        paragraphs: ['參賽團隊將於6/2站上決選舞台，整合參賽企劃內容與Mary Kay Challenge，向公司主管進行10分鐘的簡報說明。']
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
