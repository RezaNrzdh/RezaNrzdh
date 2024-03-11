import { enableProdMode, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

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
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
  .catch(err => console.error(err));
