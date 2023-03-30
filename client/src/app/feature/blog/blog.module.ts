import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from "./detail/blog.component";
import {BlogListComponent} from "./list/blog-list.component";
import {SharedModule} from "../../shared/shared.module";
import {BlogRoutingModule} from "./blog-routing.module";

@NgModule({
    declarations: [
        BlogComponent,
        BlogListComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        BlogRoutingModule
    ]
})
export class BlogModule { }
