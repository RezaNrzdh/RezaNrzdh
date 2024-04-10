import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import { CompanyComponent } from "./company/company.component";
import { EmployersComponent } from "./employers/employers.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ExperienceComponent } from "./experience/experience.component";
import { SlideComponent } from "./slide/slide.component";

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
