import {NgModule} from "@angular/core";
import {HeaderComponent} from "./component/header/header.component";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from "./component/button/button.component";
import {TextboxComponent} from "./component/textbox/textbox.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        HeaderComponent,
        ButtonComponent,
        TextboxComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        ButtonComponent,
        TextboxComponent
    ]
})
export class SharedModule {}