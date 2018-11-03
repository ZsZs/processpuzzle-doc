// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Third party components
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import {MzButtonModule, MzIconModule, MzIconMdiModule, MzProgressModule, MzSelectModule, MzInputModule, MzCheckboxModule} from 'ngx-materialize';

// ProcessPuzzle components
import { AppComponent } from './app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { environment } from '@env/environment';
import { HomeComponent } from './home.component';
import { ProcesspuzzleDocModule } from 'processpuzzle-doc';
import { ProcesspuzzleUtilModule, RemoteApiConfiguration } from 'processpuzzle-util';
import { PageNotFoundComponent } from './page-not-found.component';
import { SmartDocumentTestbedComponent } from './smart-document-testbed/smart-document-testbed.component';
import { SmartDocumentManagerTestbedComponent } from './smart-document-manager-testbed/smart-document-manager-testbed.component';
import { SmartDocumentToolTestbedComponent } from './smart-document-tool-testbed/smart-document-tool-testbed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SmartDocumentTestbedComponent,
    SmartDocumentManagerTestbedComponent,
    SmartDocumentToolTestbedComponent
  ],
  imports: [
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MzButtonModule,
    MzCheckboxModule,
    MzIconMdiModule,
    MzIconModule,
    MzInputModule,
    MzProgressModule,
    MzSelectModule,
    ProcesspuzzleDocModule,
    ProcesspuzzleUtilModule.forRoot( environment ),
    AppRoutingModule        // It's important to import AppRoutingModule after any other feature routing module.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
