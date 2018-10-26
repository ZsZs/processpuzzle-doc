import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pp-smart-document',
  template: `
    <p>
      smart-document works!
    </p>
  `,
  styles: []
})
export class SmartDocumentComponent implements OnInit {

  constructor() { }

  // event handling methods
  ngOnInit() {
  }

  // public accessors and mutators
  public cancelEdit() {}

  public editContent() {}

  // properties
}
