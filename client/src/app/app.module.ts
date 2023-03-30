import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MainLayoutComponent} from "./shared/layout/main-layout/main-layout.component";
import {AdminLayoutComponent} from "./shared/layout/admin-layout/admin-layout.component";

import { AppComponent } from './app.component';
import {RoutingModule} from "./routing.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        AdminLayoutComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        SharedModule,
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
