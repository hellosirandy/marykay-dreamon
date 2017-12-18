import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyVisionComponent } from './key-vision.component';

describe('KeyVisionComponent', () => {
  let component: KeyVisionComponent;
  let fixture: ComponentFixture<KeyVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
