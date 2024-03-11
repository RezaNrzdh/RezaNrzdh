import {NgModule} from "@angular/core";
import {BlogComponent} from "./detail/blog.component";
import {BlogListComponent} from "./list/blog-list.component";
import {CommonModule} from "@angular/common";

import {BlogRoutingModule} from "./blog-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    BlogComponent,
    BlogListComponent
]
})
export class BlogModule {}
