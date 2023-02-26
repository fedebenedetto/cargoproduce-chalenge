import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MODULE_STORE, MODULE_STORE_EFFECTS } from './constants/common-modules.constants';
import { HttpBaseService } from './services/api/http-base/http-base.service';
import { AuthInterceptorService } from './interceptors/auth/auth-interceptor.service';
import { HttpInterceptorService } from './interceptors/http/http-interceptor.service';

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
  RouterModule,
  HttpClientModule,
  MODULE_STORE,
  MODULE_STORE_EFFECTS
]

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
  exports: [...MODULES],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only')
    }
  }
}
