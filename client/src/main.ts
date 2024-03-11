import { enableProdMode, importProvidersFrom } from '@angular/core';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { RoutingModule } from './app/routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import {HttpInterceptorService} from "./app/core/interceptor/http.interceptor";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, RoutingModule),
        provideHttpClient(withInterceptorsFromDi()),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true
        }
    ]
})
  .catch(err => console.error(err));
