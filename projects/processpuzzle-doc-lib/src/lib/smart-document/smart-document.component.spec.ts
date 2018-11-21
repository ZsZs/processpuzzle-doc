import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { from, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MatProgressBarModule } from '@angular/material';

import { SmartDocumentComponent } from './smart-document.component';
import { CommonModule } from '@angular/common';
import { ProcesspuzzleDocRoutingModule} from '../processpuzzle-doc-routing.module';
import { JsonMapper, ProcesspuzzleUtilModule} from 'processpuzzle-util';
import { SmartDocument } from './smart-document';


describe('SmartDocumentComponent', () => {
  let jsonMapper: JsonMapper;
  let angularFiresotreStub = {};
  let component: SmartDocumentComponent;
  let fixture: ComponentFixture<SmartDocumentComponent>;
  let smartDocuments: SmartDocument[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartDocumentComponent ],
      imports: [
        CommonModule,
        MatProgressBarModule
      ],
      providers: [
        JsonMapper,
        { provide: ActivatedRoute, useValue: { params: of({ id: 1 })}},
        { provide: AngularFirestore, useValue: angularFiresotreStub }
      ]
    }).compileComponents();

    jsonMapper = TestBed.get( JsonMapper );
  }));

  beforeEach(() => {
    const documentObjects: Object[] = [
      { application: 'test-app',
        id: '1',
        name: 'doc1',
        contents: [{ id: '1', contentComponent: '', contentValue: '<h1>Hello</h1>'}],
        title: 'Document One'
      },
      { application: 'test-app', id: '2', name: 'doc2', contents: [], title: 'Document Two' },
      { application: 'test-app', id: '3', name: 'doc3', contents: [], title: 'Document Three' }
    ];

    smartDocuments = (jsonMapper as any).deserializeArray( documentObjects );
    const testData = from( smartDocuments );
    const collectionStub = {
      valueChanges: jasmine.createSpy('valueChanges').and.returnValue( testData )
    };
    angularFiresotreStub = {
      collection: jasmine.createSpy('collection').and.returnValue( collectionStub )
    };

    fixture = TestBed.createComponent(SmartDocumentComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onInit() retrieves document', () => {
    expect( component.document ).toEqual( smartDocuments[0] );
  });
});
