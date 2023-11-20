import {Component, Input, OnInit} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: "app-checkbox",
    templateUrl: "checkbox.component.html",
    styleUrls: ["checkbox.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: CheckboxComponent,
            multi: true
        }
    ]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

    constructor() {}

    value: string = "";
    onChange: (value: any) => void;
    onTouched: () => void;

    ngOnInit(): void {
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
