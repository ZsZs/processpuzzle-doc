import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { SmartDocument } from './smart-document';
import { SmartDocumentService } from './smart-document.service';
import {Content} from '../generic-content/content';

describe('SmartDocumentService', () => {
  const smartDocuments: Object[] = [
    { application: 'test-app',
      id: '1',
      name: 'doc1',
      contents: [{ id: '1', contentComponent: '', contentValue: '<h1>Hello</h1>'}],
      title: 'Document One'
    },
    { application: 'test-app', id: '2', name: 'doc2', contents: [], title: 'Document Two' },
    { application: 'test-app', id: '3', name: 'doc3', contents: [], title: 'Document Three' }
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
