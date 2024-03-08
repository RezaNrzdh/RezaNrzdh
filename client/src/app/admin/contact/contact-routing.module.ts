import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./detail/contact.component";
import {ContactListComponent} from "./list/contact-list.component";

const routes: Routes = [
    { path: "", component: ContactListComponent },
    { path: ":slug", component: ContactComponent }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ContactRoutingModule {}