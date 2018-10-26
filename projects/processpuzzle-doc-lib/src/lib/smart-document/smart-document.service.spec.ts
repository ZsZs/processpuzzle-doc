import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { SmartDocument } from './smart-document';
import { SmartDocumentService } from './smart-document.service';
import {Content} from '../generic-content/content';

describe('SmartDocumentService', () => {
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

  let service: SmartDocumentService;
  let angularFirestore: AngularFirestore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SmartDocumentService,
        { provide: AngularFirestore, useValue: angularFiresotreStub }
      ]
    });

    service = TestBed.get( SmartDocumentService );
    angularFirestore = TestBed.get(AngularFirestore);
  });

  it('should be created', () => {
    expect( service ).toBeTruthy();
  });
});
