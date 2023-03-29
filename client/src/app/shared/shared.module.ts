import {NgModule} from "@angular/core";
import {HeaderComponent} from "./component/header/header.component";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from "./component/button/button.component";

@NgModule({
    declarations: [
        HeaderComponent,
        ButtonComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        HeaderComponent,
        ButtonComponent
    ]
})
export class SharedModule {}