import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import { CompanyComponent } from "./component/company/company.component";
import { EmployersComponent } from "./component/employers/employers.component";
import { PortfolioComponent } from "./component/portfolio/portfolio.component";
import { ExperienceComponent } from "./component/experience/experience.component";
import { SlideComponent } from "./component/slide/slide.component";

@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.scss"],
    standalone: true,
    imports: [
        SlideComponent,
        ExperienceComponent,
        PortfolioComponent,
        EmployersComponent,
        CompanyComponent
    ]
})
export class HomeComponent implements OnInit {

    userAgent: any;
    isMobile: boolean = false;
    pattern = /mobile/i;

    constructor(private titleService: Title) {
        this.titleService.setTitle("RezaNrzdh - Home")
    }

    ngOnInit() {
        this.isMobile = this.pattern.test(navigator.userAgent);
    }
}
