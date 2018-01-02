import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Section } from '../../enums/section.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  @Input() selectedSection: Section;
  @Output() navbarButtonClick = new EventEmitter<Section>();

  buttons: any[] = [
    { section: 'home', content: 'Home' },
    { section: 'about', content: '關於Mary Kay' },
    { section: 'activity', content: '校園品牌經理徵選' },
    { section: 'timeline', content: '活動時程' },
    { section: 'reward', content: '獎勵方式' },
    // { section: 'qa', content: 'Q&A' },
    { section: 'apply', content: '立即報名' },
  ];

  constructor() { }

  ngOnInit() {
  }

  handleButtonClick(section: Section) {
    this.navbarButtonClick.emit(section);
  }

}
