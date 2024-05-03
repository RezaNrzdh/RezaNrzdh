import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AlertboxComponent} from "./shared/component/alertbox/alertbox.component";
import {AlertService} from "./core/services/alert.service";
import {Subscription} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        RouterOutlet,
        AlertboxComponent,
        NgIf
    ]
})
export class AppComponent implements OnInit, OnDestroy {

    title = 'RezaNrzdh';
    alertIsHide: boolean;

    alertSub: Subscription;

    constructor(private alertService: AlertService) {}

    ngOnInit() {
        this.alertSub = this.alertService.isHide.subscribe({
            next: ((value: boolean) => {
                this.alertIsHide = value;
            })
        })
    }

    ngOnDestroy() {
        this.alertSub.unsubscribe();
    }
}
