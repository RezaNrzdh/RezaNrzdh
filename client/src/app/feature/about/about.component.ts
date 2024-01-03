import {Component, OnDestroy, OnInit} from '@angular/core';
import {AboutService} from "../../core/services/about.service";
import {ResponsiveService} from "../../core/services/responsive.service";
import {AboutModel} from "../../core/models/about.model";
import {Subscription} from "rxjs";
import {ResponsiveEnum} from "../../core/enum/responsive.enum";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

    data: AboutModel = new AboutModel();
    show: boolean = false;
    tab: number = 0;
    isSmall: boolean = false;
    options: Array<string> = ['طراحی UIUX','برنامه نویسی','گرافیک دو بعدی','گرافیک سه بعدی','بازیسازی'];
    sub: Subscription;

    constructor(private AboutService: AboutService, private responsiveService: ResponsiveService) {
        this.sub = this.responsiveService.breakpoint.subscribe({
            next: ((value: any) => {
                value[ResponsiveEnum.SMALL] ? this.isSmall = true : this.isSmall = false;
            })
        })
    }

    ngOnInit(): void {
        this.AboutService.GetAbout().subscribe({
            next: ((value: any) => {
                this.data = value;
                this.show = true;
            }),
            error: ((error: any) => {
                console.log(error);
            })
        });
    }

    SetTabIndex(value: number): void {
        this.tab = value;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
