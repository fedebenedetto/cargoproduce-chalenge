import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ThemeModule } from './theme/theme.module';

const MODULES = [
  AppRoutingModule,
  CoreModule,
  RouterModule.forRoot([]),
  ThemeModule
]

@NgModule({
  declarations: [		
    AppComponent
   ],
  imports: [
    ...MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
