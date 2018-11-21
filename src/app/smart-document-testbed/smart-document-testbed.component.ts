import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

import { SmartDocumentComponent } from 'processpuzzle-doc';

@Component({
  selector: 'pp-smart-document-testbed',
  templateUrl: './smart-document-testbed.component.html',
  styles: [`
    .toolbar-spacer {
      flex: 1 1 auto;
    }
    .document-frame { border: 7px blue; }
  `]
})
export class SmartDocumentTestbedComponent implements AfterViewInit, OnInit {
  private smartDocumentComponent: SmartDocumentComponent;
  isEdited = false;
  isLoaded = false;

  constructor() {}

  // event handling methods
  public ngAfterViewInit() {
  }

  public ngOnInit() {
  }

  public onCancelEdit() {
    this.smartDocumentComponent.cancelEdit();
    this.isEdited = false;
  }

  public onEditContent() {
    this.smartDocumentComponent.editContent();
    this.isEdited = true;
  }

  public onDocumentActivate( componentReference: any ) {
    this.smartDocumentComponent = componentReference;
    this.isLoaded = true;
  }

  public onDocumentDeActivate( componentReference: any ) {
    this.smartDocumentComponent.cancelEdit();
    this.smartDocumentComponent = null;
    this.isLoaded = false;
  }

  // properties
}
