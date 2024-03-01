import {NgModule} from "@angular/core";
import {UserRoutingModule} from "./user-routing.module";
import {UserListComponent} from "./list/user-list.component";
import {UserComponent} from "./detail/user.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        UserListComponent,
        UserComponent
    ],
    imports: [
        UserRoutingModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class UserModule {}