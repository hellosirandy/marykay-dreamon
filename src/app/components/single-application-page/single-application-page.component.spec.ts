import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleApplicationPageComponent } from './single-application-page.component';

describe('SingleApplicationPageComponent', () => {
  let component: SingleApplicationPageComponent;
  let fixture: ComponentFixture<SingleApplicationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleApplicationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleApplicationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
