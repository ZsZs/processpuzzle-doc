import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SmartDocument } from './smart-document';
import { UrlBuilder } from 'processpuzzle-util';

@Injectable()
export class SmartDocumentService {
  private documents: {[key: string]: SmartDocument; } = {};

  // constructors
  constructor( private http: HttpClient, private urlBuilder: UrlBuilder ) {
    this.documents['home'] = new SmartDocument( '<h1>Home page</h1><p>Some text.</p>' );
    this.documents['child-one'] = new SmartDocument( '<h1>Child page one</h1>' );
    this.documents['child-two'] = new SmartDocument( '<h1>Child page two</h1>' );
  }

  // public accessors and mutators
  loadDocument ( path: string ): Observable<SmartDocument> {
    return this.http.get<SmartDocument>( this.urlBuilder.buildResourceUrl( path ));
  }

  saveDocument ( document: SmartDocument ): Observable<SmartDocument> {
    const body = JSON.stringify( document );
    const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' });
    if ( document.id ) {
      return this.updateDocument( body, headers );
    } else {
      return this.addNewDocument( body, headers );
    }
  }

  // protected, private helper methods
  addNewDocument ( body, headers ): Observable<SmartDocument> {
    return this.http.post<SmartDocument>( this.urlBuilder.buildResourceUrl(), body, { headers: headers } );
  }

  updateDocument ( body, headers ): Observable<SmartDocument> {
    return this.http.put<SmartDocument>(  this.urlBuilder.buildResourceUrl(), body, { headers: headers } );
  }
}
