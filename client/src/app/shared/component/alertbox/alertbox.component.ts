import {Component, Input, OnDestroy} from "@angular/core";
import { NgClass } from "@angular/common";
import {AlertService} from "../../../core/services/alert.service";
import {Subscription} from "rxjs";

@Component({
    selector: "app-alertbox",
    templateUrl: "alertbox.component.html",
    styleUrls: ["alertbox.component.scss"],
    standalone: true,
    imports: [
        NgClass
    ]
})
export class AlertboxComponent implements  OnDestroy {

    sub: Subscription;

    msg: string;
    type: string;
    time: number = 3;
    location: string;

    constructor(private alertService: AlertService) {

        this.sub = this.alertService.alertInfo.subscribe({
            next: ((value) => {
                this.msg      = value.msg;
                this.type     = value.type;
                this.location = value.location ? value.location : "TopCenter";
            })
        });

        const timeout = setTimeout(() => {
            clearTimeout(timeout);
            this.alertService.SetIsHide(true);
        },this.time * 1000);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
