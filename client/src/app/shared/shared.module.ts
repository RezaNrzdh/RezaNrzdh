import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from '@angular/material/icon';

import {ButtonComponent} from "./component/button/button.component";
import {TextboxComponent} from "./component/textbox/textbox.component";
import {FooterComponent} from "./component/footer/footer.component";
import {PortfolioCardComponent} from "./component/portfolioCard/portfolio-card.component";
import {IconComponent} from "./component/icon/icon.component";
import { IconDirective } from './directive/icon.directive';
import {HeaderComponent} from "./component/header/header.component";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ButtonComponent,
        TextboxComponent,
        PortfolioCardComponent,
        IconComponent,
        IconDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        MatIconModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ButtonComponent,
        TextboxComponent,
        PortfolioCardComponent,
        IconComponent,
        IconDirective
    ]
})
export class SharedModule {}
