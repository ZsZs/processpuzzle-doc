// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Third party components
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize';

// ProcessPuzzle components
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HomeComponent } from './home.component';
import { ProcesspuzzleDocModule } from '../../projects/processpuzzle-doc-lib/src/lib/processpuzzle-doc-lib.module';
import { ProcesspuzzleUtilLibModule } from 'processpuzzle-util';
import { RemoteApiConfiguration } from 'processpuzzle-util';
import { PageNotFoundComponent } from './page-not-found.component';
import { SmartDocumentTestbedComponent } from './smart-document-testbed/smart-document-testbed.component';

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
    BrowserAnimationsModule,
    BrowserModule,
    MzIconModule,
    MzIconMdiModule,
    ProcesspuzzleDocModule,
    ProcesspuzzleUtilLibModule.forRoot( apiConfiguration ),
    RouterModule.forRoot( appRoutes, { enableTracing: false } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
