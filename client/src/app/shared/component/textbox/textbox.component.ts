import { Component, Input } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: 'app-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: TextboxComponent,
            multi: true
        }
    ]
})
export class TextboxComponent implements ControlValueAccessor {

    @Input() title: string;
    @Input() type: "text" | "password" | "email" | "tel";
    @Input() name: string;
    @Input() placeholder: string = "";
    @Input() formGroup: any = "";
    @Input() multiLine: true | false = false;
    @Input() rows: number = 1;

    value: string = "";
    onChange: (value: any) => void;
    onTouched: () => void;

    constructor() { }

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
