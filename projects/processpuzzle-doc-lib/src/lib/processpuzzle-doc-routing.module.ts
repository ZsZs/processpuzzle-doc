import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartDocumentComponent} from './smart-document/smart-document.component';

const routes: Routes = [
  { path: '', component: SmartDocumentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProcesspuzzleDocRoutingModule { }
