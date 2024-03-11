import {NgModule} from "@angular/core";
import {ContactRoutingModule} from "./contact-routing.module";
import {ContactComponent} from "./detail/contact.component";
import {ContactListComponent} from "./list/contact-list.component";
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
    CommonModule,
    ContactRoutingModule,
    ContactComponent,
    ContactListComponent
]
})
export class ContactModule {}