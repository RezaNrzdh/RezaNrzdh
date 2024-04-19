import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {IconComponent} from "../icon/icon.component";
import {NgClass, NgIf} from "@angular/common";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: "app-editor",
    templateUrl: "editor.component.html",
    styleUrls: ["editor.component.scss"],
    standalone: true,
    imports: [
        IconComponent,
        NgClass,
        NgIf
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: EditorComponent,
            multi: true
        }
    ]
})
export class EditorComponent implements OnInit, ControlValueAccessor {

    contentEditable: HTMLElement;

    anchorContainer: boolean = false;

    _range: any;

    isBold: boolean      = false;
    isItalic: boolean    = false;
    isUnderline: boolean = false;
    isNumbered: boolean  = false;
    isBulleted: boolean  = false;
    isAnchor: boolean    = false;

    value: string = "";
    onChange: (value: any) => void;
    onTouched: () => void;

    constructor() {
    }

    ngOnInit() {
        this.contentEditable = document.getElementById("editable")!;
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

    Bold(): void {
        this.isBold = !this.isBold;
        this.ExecCommend("bold");
    }

    Italic(): void {
        this.isItalic = !this.isItalic;
        this.ExecCommend("italic");
    }

    Underline(): void {
        this.isUnderline = !this.isUnderline;
        this.ExecCommend("underline");
    }

    Numbered(): void {
        this.isNumbered = !this.isNumbered;
        this.ExecCommend("insertOrderedList");
    }

    Bulleted(): void {
        this.isBulleted = !this.isBulleted;
        this.ExecCommend("insertUnorderedList");
    }

    ToggleAnchorContainer(): void {
        this.anchorContainer = !this.anchorContainer;
    }

    Anchor(url: HTMLInputElement): void {
        const a = document.createElement("a");
        a.href = url.value;
        this._range.surroundContents(a);
    }

    IsEmpty(event: any): void {
        if(event.target.innerHTML === "" || event.target.innerHTML === "<br>"){
            this.Clear();
        }
    }

    SelectionCheck(): void {
        this.Clear();

        this._range = window.getSelection()!.getRangeAt(0);
        let element = this._range.startContainer;

        while (element!.parentElement!.tagName != "DIV") {
            switch (element!.parentElement!.tagName){
                case "B": this.isBold = true; break;
                case "U": this.isUnderline = true; break;
                case "I": this.isItalic = true; break;
                case "OL": this.isNumbered = true; break;
                case "UL": this.isBulleted = true; break;
                case "A": this.isAnchor = true; break;
            }
            element = element!.parentElement;
        }
    }

    Clear(): void {
        this.isBold      = false;
        this.isItalic    = false;
        this.isUnderline = false;
        this.isNumbered  = false;
        this.isBulleted  = false;
        this.isAnchor    = false;
    }


    ExecCommend(command: string, value: string = ""): void {
        document.execCommand(command, false, value);
        this.contentEditable.focus();
    }
}
