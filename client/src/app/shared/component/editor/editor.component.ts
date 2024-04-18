import {Component, OnInit} from "@angular/core";
import {IconComponent} from "../icon/icon.component";
import {NgClass} from "@angular/common";

@Component({
    selector: "app-editor",
    templateUrl: "editor.component.html",
    styleUrls: ["editor.component.scss"],
    standalone: true,
    imports: [
        IconComponent,
        NgClass
    ]
})
export class EditorComponent implements OnInit {

    selection: any;
    contentEditable: HTMLElement;

    isBold: boolean      = false;
    isItalic: boolean    = false;
    isUnderline: boolean = false;
    isNumbered: boolean  = false;
    isBulleted: boolean  = false;

    constructor() {
    }

    ngOnInit() {
        this.contentEditable = document.getElementById("editable")!;
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

    IsEmpty(event: any): void {
        if(event.target.innerHTML === "" || event.target.innerHTML === "<br>"){
            this.Clear();
        }
    }

    SelectionCheck(): void {
        this.Clear();

        const selection = window.getSelection()!;
        let element = selection.focusNode;

        while (element!.parentElement!.tagName != "DIV") {
            switch (element!.parentElement!.tagName){
                case "B": this.isBold = true; break;
                case "U": this.isUnderline = true; break;
                case "I": this.isItalic = true; break;
                case "OL": this.isNumbered = true; break;
                case "UL": this.isBulleted = true; break;
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
    }


    ExecCommend(command: string): void {
        document.execCommand(command);
        this.contentEditable.focus();
    }
}
