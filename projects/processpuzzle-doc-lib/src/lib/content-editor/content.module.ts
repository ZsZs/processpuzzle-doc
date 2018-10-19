import { NgModule } from '@angular/core';

import { ContentRouteModule } from './content.route';
import {ContentComponent} from './content.component';


@NgModule({
  imports: [
    ContentRouteModule
  ],
  declarations: [
    ContentComponent
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule {
}
