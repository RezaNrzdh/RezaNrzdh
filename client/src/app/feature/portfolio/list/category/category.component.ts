import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ButtonComponent} from "../../../../shared/component/button/button.component";
import {CategoryConstant} from "../../../../core/constant/category.constant";
import {NgFor, NgIf} from "@angular/common";
import {BottomsheetComponent} from "../../../../shared/component/bottomsheet/bottomsheet.component";

@Component({
    selector: "app-portfolio-category",
    templateUrl: "category.component.html",
    styleUrls: ["category.component.scss"],
    standalone: true,
    imports: [
        ButtonComponent,
        NgIf,
        NgFor,
        BottomsheetComponent
    ]
})
export class CategoryComponent {

    @Input() isSmall: boolean = false;
    @Input() currentTab: number = 0;
    @Output() output: EventEmitter<any> = new EventEmitter<any>();

    options: Array<string> = ['همه', ...CategoryConstant];
    isVisible: boolean = false;

    constructor() {}

    CallOnGetAllPortfolio(index: number): void {
        this.output.emit(index);
    }

    ToggleVisible(): void {
        this.isVisible = !this.isVisible;
    }
}
