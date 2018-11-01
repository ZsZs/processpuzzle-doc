import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/home.component';
import { SmartDocumentComponent } from 'processpuzzle-doc';
import { SmartDocumentTestbedComponent } from '@app/smart-document-testbed/smart-document-testbed.component';
import { SmartDocumentManagerTestbedComponent } from '@app/smart-document-manager-testbed/smart-document-manager-testbed.component';
import { PageNotFoundComponent } from '@app/page-not-found.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'smart-document-manager-testbed', component: SmartDocumentManagerTestbedComponent },
  { path: 'smart-document-testbed', component: SmartDocumentTestbedComponent,
    children: [
      { path: 'content/:id', component: SmartDocumentComponent }
    ]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( APP_ROUTES, { enableTracing: true } )
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }