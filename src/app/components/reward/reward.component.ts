import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  items = [
    { title: '第一名', content: '美國達拉斯總部參觀<br>＋10萬獎金' },
    { title: '第二名', content: '美國達拉斯總部參觀<br>＋5萬獎金' },
    { title: '第三名', content: '美國達拉斯總部參觀' },
    { title: '第四名', content: '亞太區 or 大中華總部參觀' },
    { title: '第五名', content: '亞太區 or 大中華總部參觀' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
