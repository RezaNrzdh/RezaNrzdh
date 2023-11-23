import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {PortfolioComponent} from "./detail/portfolio.component";
import {PortfolioRoutingModule} from "./portfolio-routing.module";
import {PortfolioListComponent} from "./list/portfolio-list.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {CommentComponent} from "./detail/comment/comment.component";
import {ReplyComponent} from "./detail/reply/reply.component";

@NgModule({
    declarations: [
        PortfolioComponent,
        PortfolioListComponent,
        CommentComponent,
        ReplyComponent
    ],
    providers: [],
    imports: [
        PortfolioRoutingModule,
        SharedModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class PortfolioModule{}
