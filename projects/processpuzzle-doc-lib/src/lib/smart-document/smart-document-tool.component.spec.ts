import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartDocumentToolComponent } from './smart-document-tool.component';

describe('SmartDocumentToolComponent', () => {
  let component: SmartDocumentToolComponent;
  let fixture: ComponentFixture<SmartDocumentToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartDocumentToolComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( SmartDocumentToolComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
