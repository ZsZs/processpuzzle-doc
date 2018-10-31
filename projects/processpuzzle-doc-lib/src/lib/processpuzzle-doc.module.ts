// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Third party components
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// ProcessPuzzle components
import { ContentComponent } from './generic-content/content.component';
import { ProcesspuzzleDocRoutingModule } from './processpuzzle-doc-routing.module';
import { ProcesspuzzleUtilModule } from 'processpuzzle-util';
import { SmartDocumentComponent } from './smart-document/smart-document.component';
import { SmartDocumentService } from './smart-document/smart-document.service';
import { TextContentComponent } from './text-content/text-content.component';
import { TextContentEditor } from './text-content/text-content-editor';

@NgModule({
  declarations: [
    ContentComponent,
    SmartDocumentComponent,
    TextContentComponent
  ],
  imports: [
    CommonModule,
    ProcesspuzzleDocRoutingModule,
    ProcesspuzzleUtilModule
  ],
  exports: [
    SmartDocumentComponent
  ],
  providers: [
    SmartDocumentService,
    TextContentEditor
  ]
})

export class ProcesspuzzleDocModule { }
