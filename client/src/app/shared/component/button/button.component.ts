import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
    selector: "app-button",
    templateUrl: "button.component.html",
    styleUrls: ["button.component.scss"]
})
export class ButtonComponent implements OnInit {

    @Input() mode: "filled" | "outlined" | "ghost" | "submit";
    @Input() action: "submit" | "button" | "reset";
    @Input() color: "primary" | "secondary" | "success" | "danger" | "info";
    @Input() disabled: any = "";
    @Output() click: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {
    }

    onClick = () => {
        if(this.click["observers"].length == 0){
            return;
        }
        this.click.emit();
    }
}
