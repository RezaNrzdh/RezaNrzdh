import {Component, OnInit} from "@angular/core";
import {IconComponent} from "../icon/icon.component";
import {NgClass, NgIf} from "@angular/common";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
    selector: "app-editor",
    templateUrl: "editor.component.html",
    styleUrls: ["editor.component.scss"],
    standalone: true,
    imports: [
        IconComponent,
        NgClass,
        NgIf,
        FormsModule
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
    _range: any;

    isBold: boolean      = false;
    isItalic: boolean    = false;
    isUnderline: boolean = false;
    isNumbered: boolean  = false;
    isBulleted: boolean  = false;
    isAnchor: boolean    = false;

    anchorContainer: boolean = false;
    link: any = {
        input: "",
        isLink: false,
        element: null
    }
    // isLinkedBefore: boolean  = false;
    // anchorInput: string = "";

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
        if(this.isAnchor){
            let element = this._range.startContainer;
            while (element!.parentElement!.tagName != "DIV") {
                if(element!.parentElement!.tagName == "A"){
                    this.link.isLink  = true;
                    this.link.input   = element!.parentElement!.attributes[0].nodeValue;
                    this.link.element = element!.parentElement;
                    return;
                }
                element = element!.parentElement;
            }
        }
    }

    Anchor(): void {
        if(this._range == null)
            return;

        if(this.link.isLink){
            this.link.element.attributes[0].nodeValue = this.link.input;
        }
        else {
            const a = document.createElement("a");
            a.href = this.link.input;
            a.target = "_blank";
            this._range.surroundContents(a);
        }

        this.anchorContainer = !this.anchorContainer;
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
        this.isBold         = false;
        this.isItalic       = false;
        this.isUnderline    = false;
        this.isNumbered     = false;
        this.isBulleted     = false;
        this.isAnchor       = false;
        this.link.isLink    = false;
        this.link.input     = "";
    }


    ExecCommend(command: string, value: string = ""): void {
        document.execCommand(command, false, value);
        this.contentEditable.focus();
    }
}
