import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { environment } from '../environments/environment';
import { ProcesspuzzleUtilLibModule } from 'processpuzzle-util';
import { RemoteApiConfiguration } from 'processpuzzle-util';
import { PageNotFoundComponent } from './page-not-found.component';
import { SmartDocumentComponent } from './smart-document/smart-document.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'smart-document', component: SmartDocumentComponent },
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
    SmartDocumentComponent
  ],
  imports: [
    BrowserModule,
    ProcesspuzzleUtilLibModule.forRoot( apiConfiguration ),
    RouterModule.forRoot( appRoutes, { enableTracing: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
