import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {AlertboxModel} from "../models/alertbox.model";

@Injectable({providedIn: "root"})
export class AlertService {

    isHide = new BehaviorSubject<boolean>(true);
    alertInfo = new BehaviorSubject<AlertboxModel>(new AlertboxModel());

    SetIsHide(value: boolean): void {
        this.isHide.next(value);
    }

    SetAlertInfo(value: AlertboxModel): void {
        this.alertInfo.next(value);
    }
}
