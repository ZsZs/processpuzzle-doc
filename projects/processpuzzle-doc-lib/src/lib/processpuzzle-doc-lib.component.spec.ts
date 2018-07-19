import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesspuzzleDocComponent } from './processpuzzle-doc-lib.component';

describe('ProcesspuzzleDocComponent', () => {
  let component: ProcesspuzzleDocComponent;
  let fixture: ComponentFixture<ProcesspuzzleDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesspuzzleDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesspuzzleDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
