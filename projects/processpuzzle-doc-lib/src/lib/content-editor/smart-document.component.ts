import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ContentEditor } from './content-editor';
import { ContentModule } from './content.module';
import { ContentActions } from './content-actions';
import { SmartDocumentService } from './smart-document.service';
import { SmartDocument } from './smart-document';

@Component({
   selector: 'pp-smart-document',
   template: `
     <div>
       <div data-editable data-name="main-content">
         <blockquote>
           Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.
         </blockquote>
         <p>John F. Woods</p>
       </div>
       <div data-editable data-name="other-content">
         <p>Second content to edit.</p>
       </div>
     </div>
     <!--
     <div>
        <ng-template dynamic-template [template]="extraTemplate" (dynamicComponentReady)="documentIsLoaded($event)"></ng-template>
     </div>
     -->
   `,
   providers: [ContentEditor]
})

export class SmartDocumentComponent implements OnDestroy, OnInit {
   document: SmartDocument;
   documentName: string;
   extraModules = [ContentModule];
   extraTemplate = `
   <div data-editable data-name="main-content">
       <blockquote>
           Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.
       </blockquote>
       <p>John F. Woods</p>
   </div>
   `;
   isVisible: boolean;
   routeSubscription: Subscription;

   constructor( private contentEditor: ContentEditor, private route: ActivatedRoute, private documentService: SmartDocumentService ) {
   }

  // public accessors and mutators
  public cancelEdit() {
    this.contentEditor.destroy();
  }

  public editContent() {
    this.contentEditor.initialize();
    this.contentEditor.watchContentChange().subscribe(
      (content: string) => {
//            this.saveContent(content);
      }
    );
  }


  // event handling methods
   onContentChanged( content: string) {
//      this.saveContent(content);
   }

   ngOnDestroy() {
      this.routeSubscription.unsubscribe();
   }

   ngOnInit() {
      this.verifyifVisible();
      // this.desktop.watchContentAction().subscribe(
      //    (action: ContentActions) => this.handleContentAction( action )
      // );
      this.routeSubscription = this.route.url.subscribe(
         (url: any) => {
//            this.loadContent( url );
         }
      );
   }

   // protected, private helper mehtods
   private handleContentAction( action: ContentActions ) {
      if ( action === ContentActions.EditContent ) { this.editContent(); }
   }

   private loadContent( url: string ): void {
      this.documentName = url;
      this.documentService.loadDocument(this.documentName).subscribe(
         (response) => {
            this.document = response;
            const templateContent = this.document.template;
            this.extraTemplate = `<div data-editable data-name="${this.documentName}">${templateContent}</div>`;
         }
      );
   }

   private saveContent(content: string) {
      this.document.updateContent(content);
      this.documentService.saveDocument(this.document).subscribe(
         ( response ) => {
            this.document.id = response.id;
         }
      );
   }

   private subscribeToDesktopChange() {
      // this.desktop.watchDesktopChange().subscribe(
      //    () => {
      //       this.verifyifVisible();
      //    }
      // );
   }

   private verifyifVisible() {
      // this.isVisible = !this.desktop.hasElements();
   }
}
