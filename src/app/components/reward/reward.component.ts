import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {
  @ViewChild('content') content: ElementRef;

  items = [
    { title: '第一名', content: '10萬獎金及大中華區總經理親筆推薦信' },
    { title: '第二名', content: '5萬獎金及大中華區總經理親筆推薦信' },
    { title: '第三名', content: '3萬獎金及大中華區總經理親筆推薦信' },
    { title: '第四名', content: '2萬元產品及大中華區總經理親筆推薦信' },
    { title: '第五名', content: '1萬元產品及大中華區總經理親筆推薦信' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
