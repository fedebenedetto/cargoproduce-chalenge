import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

const COMPONENTS = [
  PagesComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }
