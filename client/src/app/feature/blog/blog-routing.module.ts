import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BlogListComponent} from "./list/blog-list.component";
import {BlogComponent} from "./detail/blog.component";

const routes: Routes = [
    { path: "", component: BlogListComponent },
    { path: ":slug", component: BlogComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class BlogRoutingModule {}