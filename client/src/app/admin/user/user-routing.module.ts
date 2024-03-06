import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./list/user-list.component";
import {UserComponent} from "./detail/user.component";

const routes: Routes = [
    { path: "", component: UserListComponent },
    { path: ":username", component: UserComponent },
    { path: "detail", component: UserComponent }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class UserRoutingModule {}
