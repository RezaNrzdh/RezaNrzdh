import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from "./detail/blog.component";
import {BlogListComponent} from "./list/blog-list.component";

import {BlogRoutingModule} from "./blog-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PortfolioModule} from "../portfolio/portfolio.module";

@NgModule({
    imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule,
    PortfolioModule,
    BlogComponent,
    BlogListComponent
]
})
export class BlogModule { }
