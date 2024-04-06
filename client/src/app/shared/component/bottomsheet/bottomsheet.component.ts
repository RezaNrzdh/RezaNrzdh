import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NgFor} from "@angular/common";
import {IconComponent} from "../icon/icon.component";

@Component({
    selector: "app-bottomsheet",
    templateUrl: "bottomsheet.component.html",
    styleUrls: ["bottomsheet.component.scss"],
    standalone: true,
    imports: [
        NgFor,
        IconComponent
    ]
})
export class BottomsheetComponent implements OnInit {

    @Input() title: string;
    @Input() options: Array<string>;
    @Output() isOpen: EventEmitter<any> = new EventEmitter<any>();
    @Output() value: EventEmitter<any> = new EventEmitter<any>();

    constructor(){}

    ngOnInit() {}

    CloseDialog(): void {
        this.isOpen.emit(false);
    }

    EmitValue(val: number): void {
        this.value.emit(val);
        this.isOpen.emit(false);
    }
}
