import { NgModule } from '@angular/core';

import { ProcesspuzzleDocComponent } from './processpuzzle-doc-lib.component';
import { SmartDocumentComponent } from './content-editor/smart-document.component';
import { SmartDocumentService } from './content-editor/smart-document.service';

@NgModule({
  imports: [
  ],
  declarations: [
    ProcesspuzzleDocComponent,
    SmartDocumentComponent
  ],
  exports: [
    ProcesspuzzleDocComponent,
    SmartDocumentComponent
  ],
  providers: [SmartDocumentService],
})
export class ProcesspuzzleDocModule { }
