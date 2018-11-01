import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { from, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { SmartDocumentComponent } from './smart-document.component';
import {CommonModule} from '@angular/common';
import {MzProgressModule} from 'ngx-materialize';
import {ProcesspuzzleDocRoutingModule} from '../processpuzzle-doc-routing.module';
import {ProcesspuzzleUtilModule} from 'processpuzzle-util';

describe('SmartDocumentComponent', () => {
  const smartDocuments: Object[] = [
    { _application: 'test-app',
      _id: '1',
      _name: 'doc1',
      _contents: [{ id: '1', _contentComponent: '', _contentValue: '<h1>Hello</h1>'}],
      _title: 'Document One'
    },
    { _application: 'test-app', _id: '2', _name: 'doc2', _contents: [], _title: 'Document Two' },
    { _application: 'test-app', _id: '3', _name: 'doc3', _contents: [], _title: 'Document Three' }
  ];

  const data = from( smartDocuments );

  const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue( data )
  };

  const angularFiresotreStub = {
    collection: jasmine.createSpy('collection').and.returnValue( collectionStub )
  };

  let component: SmartDocumentComponent;
  let fixture: ComponentFixture<SmartDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartDocumentComponent ],
      imports: [
        MzProgressModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { params: of({ id: 123 })}},
        { provide: AngularFirestore, useValue: angularFiresotreStub }
      ]
    }).compileComponents();
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
