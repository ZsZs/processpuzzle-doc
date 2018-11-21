import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs';

import { ObjectUtil } from 'processpuzzle-util';

import { SmartDocumentService } from './smart-document.service';
import { SmartDocument } from './smart-document';

@Component({
  selector: 'pp-smart-document',
  template: `
    <div *ngIf="document==undefined">
      <mat-progress-bar mode="query"></mat-progress-bar>
      <h5>{{documentId}} is loading...</h5>
    </div>
    <div *ngIf="document!=undefined">
      <h5>{{document.title}}</h5>
    </div>
  `,
  styles: []
})

export class SmartDocumentComponent implements OnDestroy, OnInit {
  documentId: string;
  document: SmartDocument;
  private uriParametersSubsciption: Subscription;

  constructor( private route: ActivatedRoute, private documentService: SmartDocumentService ) { }

  // event handling methods
  ngOnDestroy() {
    this.uriParametersSubsciption.unsubscribe();
  }

  ngOnInit() {
    this.uriParametersSubsciption = this.route.params.subscribe( (params: Params) => {
      this.documentId = params['id'];
      this.document = undefined;
      this.retrieveDocument();
    });
  }

  // public accessors and mutators
  public cancelEdit() {}

  public editContent() {}

  // private helper methods
  private retrieveDocument() {
    this.documentService.findDocumentById( this.documentId ).subscribe( document => {
      if ( !ObjectUtil.isNullOrUndefined( document )) {
        this.document = document;
      }
    });
  }

  // properties
}
