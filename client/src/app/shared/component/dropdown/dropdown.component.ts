import {Component, Input, OnInit} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from "@angular/forms";
import { NgClass, NgFor } from "@angular/common";

@Component({
    selector: "app-dropdown",
    templateUrl: "dropdown.component.html",
    styleUrls: ["dropdown.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: DropdownComponent,
            multi: true
        }
    ],
    standalone: true,
    imports: [NgClass, NgFor, FormsModule]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

    @Input() options: Array<string>;
    @Input() numValue: boolean = true;
    @Input() darkmode: boolean = false;

    value: number;

    onChange: any;
    onTouched: () => void;

    constructor() {
    }

    ngOnInit() {
    }

    writeValue(obj: any) {
        this.value = obj;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }
}
