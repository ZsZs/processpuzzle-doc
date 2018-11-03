import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/home.component';
import { PageNotFoundComponent } from '@app/page-not-found.component';
import { SmartDocumentComponent } from 'processpuzzle-doc';
import { SmartDocumentManagerTestbedComponent } from '@app/smart-document-manager-testbed/smart-document-manager-testbed.component';
import { SmartDocumentTestbedComponent } from '@app/smart-document-testbed/smart-document-testbed.component';
import { SmartDocumentToolTestbedComponent } from '@app/smart-document-tool-testbed/smart-document-tool-testbed.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'smart-document-manager-testbed', component: SmartDocumentManagerTestbedComponent },
  { path: 'smart-document-testbed', component: SmartDocumentTestbedComponent,
    children: [
      { path: 'content/:id', component: SmartDocumentComponent }
    ]},
  { path: 'smart-document-tool-testbed', component: SmartDocumentToolTestbedComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( APP_ROUTES, { enableTracing: false } )
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
