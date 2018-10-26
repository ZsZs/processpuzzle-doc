// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Third party components
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize';

// ProcessPuzzle components
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HomeComponent } from './home.component';
import { ProcesspuzzleDocModule } from '../../projects/processpuzzle-doc-lib/src/lib/processpuzzle-doc.module';
import { ProcesspuzzleUtilModule, RemoteApiConfiguration } from 'processpuzzle-util';
import { PageNotFoundComponent } from './page-not-found.component';
import { SmartDocumentTestbedComponent } from './smart-document-testbed/smart-document-testbed.component';
import { SmartDocumentService } from '../../projects/processpuzzle-doc-lib/src/lib/smart-document/smart-document.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'smart-document-testbed', component: SmartDocumentTestbedComponent },
  { path: '**', component: PageNotFoundComponent }
];

const apiConfiguration: RemoteApiConfiguration = {
  protocol: environment['contactService'].protocol,
  host: environment['contactService'].host,
  contextPath: environment['contactService'].contextPath,
  resourcePath: environment['contactService'].resourcePath,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SmartDocumentTestbedComponent
  ],
  imports: [
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    BrowserModule,
    MzIconModule,
    MzIconMdiModule,
    ProcesspuzzleDocModule,
    ProcesspuzzleUtilModule.forRoot( environment ),
    RouterModule.forRoot( appRoutes, { enableTracing: false } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
