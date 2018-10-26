import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartDocumentComponent } from './smart-document.component';

describe('SmartDocumentComponent', () => {
  let component: SmartDocumentComponent;
  let fixture: ComponentFixture<SmartDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
