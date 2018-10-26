import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TextContent } from './text-content';
import { UrlBuilder } from 'processpuzzle-util';

// @Injectable()
export class TextContentService {
  private documents: {[key: string]: TextContent; } = {};
  private readonly servicePropertyName = 'documentService';

  // constructors
  constructor( private http: HttpClient, private urlBuilder: UrlBuilder ) {
    this.documents['home'] = new TextContent( '<h1>Home page</h1><p>Some text.</p>' );
    this.documents['child-one'] = new TextContent( '<h1>Child page one</h1>' );
    this.documents['child-two'] = new TextContent( '<h1>Child page two</h1>' );
  }

  // public accessors and mutators
  loadDocument ( path: string ): Observable<TextContent> {
    return this.http.get<TextContent>( this.urlBuilder.buildResourceUrl( this.servicePropertyName, path ));
  }

  saveDocument ( document: TextContent ): Observable<TextContent> {
    const body = JSON.stringify( document );
    const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' });
    if ( document.id ) {
      return this.updateDocument( body, headers );
    } else {
      return this.addNewDocument( body, headers );
    }
  }

  // protected, private helper methods
  addNewDocument ( body, headers ): Observable<TextContent> {
    return this.http.post<TextContent>( this.urlBuilder.buildResourceUrl( this.servicePropertyName ), body, { headers: headers } );
  }

  updateDocument ( body, headers ): Observable<TextContent> {
    return this.http.put<TextContent>(  this.urlBuilder.buildResourceUrl( this.servicePropertyName ), body, { headers: headers } );
  }
}
