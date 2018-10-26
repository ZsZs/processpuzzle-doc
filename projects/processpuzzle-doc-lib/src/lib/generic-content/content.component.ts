import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pp-content',
  template: `
    <p>
      content works!
    </p>
  `,
  styles: []
})

export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
