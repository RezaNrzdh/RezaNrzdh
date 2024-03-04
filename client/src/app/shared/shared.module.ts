import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon';

import {AdminHeaderComponent} from "./component/adminHeader/adminHeader.component";
import {AdminSideComponent} from "./component/adminSide/adminSide.component";
import {TableComponent} from "./component/table/table.component";

import {ButtonComponent} from "./component/button/button.component";
import {TextboxComponent} from "./component/textbox/textbox.component";
import {FooterComponent} from "./component/footer/footer.component";
import {PortfolioCardComponent} from "./component/portfolioCard/portfolio-card.component";
import {IconComponent} from "./component/icon/icon.component";
import {HeaderComponent} from "./component/header/header.component";
import {NewsletterComponent} from "./component/newsletter/newsletter.component";
import {CheckboxComponent} from "./component/checkbox/checkbox.component";
import {TagComponent} from "./component/tag/tag.component";
import {SidebarComponent} from "./component/sidebar/sidebar.component";
import {DropdownComponent} from "./component/dropdown/dropdown.component";
import {CalendarPipe} from "./pipe/calendar.pipe";
import {AlertboxComponent} from "./component/alertbox/alertbox.component";
import {CategoryPipe} from "./pipe/category.pipe";
import {CommentComponent} from "./component/comment/comment.component";
import {ReplyComponent} from "./component/reply/reply.component";
import {ClickoutsideDirective} from "./directive/clickoutside.directive";
import {UploadfileComponent} from "./component/uploadfile/uploadfile.component";
import {PublishPipe} from "./pipe/publish.pipe";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AdminHeaderComponent,
        AdminSideComponent,
        TableComponent,
        ButtonComponent,
        TextboxComponent,
        PortfolioCardComponent,
        IconComponent,
        NewsletterComponent,
        CheckboxComponent,
        TagComponent,
        SidebarComponent,
        DropdownComponent,
        CalendarPipe,
        CategoryPipe,
        PublishPipe,
        AlertboxComponent,
        CommentComponent,
        ReplyComponent,
        ClickoutsideDirective,
        UploadfileComponent
],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        MatIconModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AdminHeaderComponent,
        AdminSideComponent,
        TableComponent,
        ButtonComponent,
        TextboxComponent,
        PortfolioCardComponent,
        IconComponent,
        NewsletterComponent,
        CheckboxComponent,
        TagComponent,
        SidebarComponent,
        DropdownComponent,
        CalendarPipe,
        CategoryPipe,
        PublishPipe,
        AlertboxComponent,
        CommentComponent,
        ReplyComponent,
        ClickoutsideDirective,
        UploadfileComponent
    ]
})
export class SharedModule {}
