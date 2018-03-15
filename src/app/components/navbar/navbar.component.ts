import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Section } from '../../enums/section.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('content') content: ElementRef;
  @Input() selectedSection: Section;
  @Output() navbarButtonClick = new EventEmitter<Section>();

  buttons: any[] = [
    { section: 'home', content: 'Home' },
    { section: 'about', content: '關於Mary Kay' },
    { section: 'activity', content: '夢想啟動商業競賽' },
    { section: 'timeline', content: '活動時程' },
    { section: 'reward', content: '獎勵方式' },
    { section: 'apply', content: '立即報名' },
  ];

  constructor() { }

  handleButtonClick(section: Section) {
    this.navbarButtonClick.emit(section);
  }

}
