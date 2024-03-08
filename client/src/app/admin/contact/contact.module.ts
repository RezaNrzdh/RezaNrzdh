import {NgModule} from "@angular/core";
import {ContactRoutingModule} from "./contact-routing.module";
import {ContactComponent} from "./detail/contact.component";
import {ContactListComponent} from "./list/contact-list.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        ContactComponent,
        ContactListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ContactRoutingModule
    ]
})
export class ContactModule {}