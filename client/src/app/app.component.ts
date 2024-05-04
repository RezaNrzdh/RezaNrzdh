import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AlertboxComponent} from "./shared/component/alertbox/alertbox.component";
import {AlertService} from "./core/services/alert.service";
import {Subscription} from "rxjs";
import {NgIf} from "@angular/common";
import {ResponsiveService} from "./core/services/responsive.service";
import {ResponsiveEnum} from "./core/enum/responsive.enum";
import {BottommenuComponent} from "./shared/component/bottommenu/bottommenu.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        RouterOutlet,
        AlertboxComponent,
        BottommenuComponent,
        NgIf
    ]
})
export class AppComponent implements OnInit, OnDestroy {

    title = 'RezaNrzdh';
    alertIsHide: boolean;

    isSmall: boolean = false;

    ResSub: Subscription;
    alertSub: Subscription;

    constructor(private alertService: AlertService, private responsiveService: ResponsiveService) {
        this.responsiveService.breakpoint.subscribe({
            next:((value: any) => {
                value[ResponsiveEnum.SMALL]
                    ? this.isSmall = true
                    : this.isSmall = false;
            })
        });
    }

    ngOnInit() {
        this.alertSub = this.alertService.isHide.subscribe({
            next: ((value: boolean) => {
                this.alertIsHide = value;
            })
        })
    }

    ngOnDestroy() {
        this.alertSub.unsubscribe();
        this.ResSub.unsubscribe();
    }
}
