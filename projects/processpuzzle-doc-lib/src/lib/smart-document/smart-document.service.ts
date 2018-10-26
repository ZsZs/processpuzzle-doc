import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { SmartDocument } from './smart-document';

@Injectable({ providedIn: 'root' })
export class SmartDocumentService {
  private readonly applicationName = 'test-app';
  private readonly documentCollectionName = 'smartDocuments';
  private document: Observable<SmartDocument | null>;
  private documents: Observable<SmartDocument[]>;
  private documentsRef: AngularFirestoreCollection<SmartDocument>;

  constructor( private db: AngularFirestore ) {
    this.documentsRef = this.db.collection<SmartDocument>( this.documentCollectionName );
  }

  // public accessors and mutators
  public findAll(): Observable<SmartDocument[]> {
    return this.documents = this.documentsRef.valueChanges();
  }

  public findDocumentById( documentId: string ): Observable<SmartDocument> {
//    return this.documentsRef.doc( documentId ).get();
    return null;
  }

  public findDocumentByName( documentName: string ): Observable<SmartDocument[]> {
    return this.db.collection<SmartDocument>(
      this.documentCollectionName,
        ref => ref.where( 'application', '==', this.applicationName )
                          .where( 'name', '==', documentName )).valueChanges();
  }

  // protected, private helper methods

  // properties
  // @formatter:off
  // @formatter:on
}
