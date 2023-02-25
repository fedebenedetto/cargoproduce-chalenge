import { HttpClientModule } from "@angular/common/http"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { RouterModule } from "@angular/router"
import { EffectsModule } from "@ngrx/effects"
import { StoreModule } from "@ngrx/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { appReducers } from "src/app/store/app.reducers"
import { EffectsArray } from "src/app/store/effects"
import { environment } from "src/environments/environment"


export const MODULES_HTTP_ROUTER = [
    HttpClientModule,
    RouterModule.forRoot([]),
 ]
 export const COMMON_MODULES_SPEC = [
    MODULES_HTTP_ROUTER,
    BrowserAnimationsModule,
 ]
 export const MODULE_STORE = [
    StoreModule.forRoot(appReducers,
       {
          runtimeChecks: {
             strictActionImmutability: false,
             strictActionSerializability: false,
             strictActionTypeUniqueness: environment.production,
             strictActionWithinNgZone: environment.production,
             strictStateImmutability: environment.production,
             strictStateSerializability: false,
          }
       }),
    StoreDevtoolsModule.instrument({
       maxAge: 25,
       logOnly: environment.production
    }),
 ]
 
 export const MODULE_STORE_EFFECTS = [
    EffectsModule.forRoot(EffectsArray)
 
 ]