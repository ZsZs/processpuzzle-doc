import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SmartDocumentComponent} from 'processpuzzle-doc';

@Component({
  selector: 'pp-smart-document-testbed',
  templateUrl: './smart-document-testbed.component.html',
  styles: [`
    .document-frame { border: 7px blue; }
  `]
})
export class SmartDocumentTestbedComponent implements AfterViewInit, OnInit {
  @ViewChild( 'smart_document' ) private smartDocumentComponent: SmartDocumentComponent;
  isEdited = false;

  constructor() { }

  // event handling methods
  ngAfterViewInit() {

  }

  ngOnInit() {
  }

  onCancelEdit() {
    this.smartDocumentComponent.cancelEdit();
    this.isEdited = false;
  }

  onEditContent() {
    this.smartDocumentComponent.editContent();
    this.isEdited = true;
  }

  // properties
}
