import {Component, DoCheck, OnInit} from '@angular/core';
import {AboutService} from "../../core/services/about.service";
import {ResponsiveService} from "../../core/services/responsive.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, DoCheck {

    data: any;
    tab: number = 0;
    isSmall: boolean = false;
    options: Array<string> = ['طراحی UIUX','برنامه نویسی','گرافیک دو بعدی','گرافیک سه بعدی','بازیسازی'];

    constructor(private AboutService: AboutService, private responsiveService: ResponsiveService) { }

    ngOnInit(): void {
        this.data = this.AboutService.GetAbout();
        console.log(this.data);
    }

    SetTabIndex(value: number): void {
        this.tab = value;
    }

    ngDoCheck() {
        this.isSmall = this.responsiveService.getSmall;
    }

}
