import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartDocumentComponent} from './smart-document/smart-document.component';

const documentRoutes: Routes = [
  { path: 'content', outlet: 'smartDocument',
    children: [
      { path: ':id', component: SmartDocumentComponent }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( documentRoutes )
  ],
  exports: [
    RouterModule
  ]
})

export class ProcesspuzzleDocRoutingModule { }
