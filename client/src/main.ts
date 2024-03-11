import { enableProdMode, importProvidersFrom } from '@angular/core';
import {HTTP_INTERCEPTORS, provideHttpClient} from "@angular/common/http";

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { CoreModule } from './app/core/core.module';
import { RoutingModule } from './app/routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, RoutingModule, CoreModule),
        provideHttpClient(),
    ]
})
  .catch(err => console.error(err));
