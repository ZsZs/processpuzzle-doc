import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs';

import { SmartDocumentService } from './smart-document.service';
import { SmartDocument } from './smart-document';

@Component({
  selector: 'pp-smart-document',
  template: `
    <h1>{{documentId}}</h1>
    <p>
      smart-document works!
    </p>
  `,
  styles: []
})

export class SmartDocumentComponent implements OnDestroy, OnInit {
  documentId: string;
  document: SmartDocument;
  private uriParametersSubsciption: Subscription;

  constructor( private route: ActivatedRoute, documentService: SmartDocumentService ) { }

  // event handling methods
  ngOnDestroy() {
    this.uriParametersSubsciption.unsubscribe();
  }

  ngOnInit() {
    this.uriParametersSubsciption = this.route.params.subscribe( (params: Params) => {
      this.documentId = params['id'];
    });
  }

  // public accessors and mutators
  public cancelEdit() {}

  public editContent() {}

  // properties
}
