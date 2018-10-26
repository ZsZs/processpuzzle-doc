import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

// const contentTools  = require( 'ContentTools' );
import * as contentTools from 'ContentTools';
declare let ContentTools: any;
export let textContentEditor: TextContentEditor;

@Injectable()
export class TextContentEditor {
   private contentChangeSource = new Subject<string>();
   private editor = contentTools.EditorApp.get();

   // constructors

   // public accessors and mutators
   public announceContentChanged( content: string ) {
      this.contentChangeSource.next( content );
   }

   public destroy() {
     this.editor.destroy();
   }

   public initialize() {
      textContentEditor = this;

      this.addStyles();
      this.editor.init('*[data-editable]', 'data-name');
      this.editor.addEventListener('saved', this.saveContent );
   }

   public saveContent( textEditEvent: any ) {
      this.editor = this;

      const textEditRegions = textEditEvent.detail().regions;

      if (Object.keys( textEditRegions ).length === 0) {
         return;
      }

      // Set the editor as busy while we save our changes
      this.editor.busy( true );

      // Collect the contents of each region into a FormData instance
      let content: string;
      for ( const name in textEditRegions ) {
         if ( textEditRegions.hasOwnProperty( name )) {
            content = textEditRegions[name];
         }
      }

      // Send the update generic-content to the server to be saved
      textContentEditor.announceContentChanged( content );
      this.editor.busy( false );
      const flashUI = new ContentTools.FlashUI('ok');
   }

   watchContentChange(): Observable<string> {
      return this.contentChangeSource.asObservable();
   }

   // protected, private helper methods
   private addStyles() {
      ContentTools.StylePalette.add([
         new ContentTools.Style( 'Button', 'btn', ['a']),
         new ContentTools.Style( 'Chip', 'chip', ['div'])
      ]);
   }
}
