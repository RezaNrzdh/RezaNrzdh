import {NgModule} from "@angular/core";
import {UserRoutingModule} from "./user-routing.module";
import {UserListComponent} from "./list/user-list.component";
import {UserComponent} from "./detail/user.component";
import {CommonModule} from "@angular/common";

import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
    UserRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    UserListComponent,
    UserComponent
]
})
export class UserModule {}