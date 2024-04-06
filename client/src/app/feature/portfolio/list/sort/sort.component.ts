import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ButtonComponent} from "../../../../shared/component/button/button.component";
import {SortEnum} from "../../../../core/enum/sort.enum";
import {SortConstant} from "../../../../core/constant/sort.constant";
import {NgIf} from "@angular/common";
import {BottomsheetComponent} from "../../../../shared/component/bottomsheet/bottomsheet.component";

@Component({
    selector: "app-portfolio-sort",
    templateUrl: "sort.component.html",
    standalone: true,
    imports: [
        ButtonComponent,
        NgIf,
        BottomsheetComponent
    ]
})
export class SortComponent {

    @Input() isXSmall: boolean = false;
    @Output() newstPortfolio: EventEmitter<any> = new EventEmitter<any>();
    @Output() mostVisitedPortfolio: EventEmitter<any> = new EventEmitter<any>();

    sortName: Array<string> = SortConstant;
    sortNum: SortEnum = SortEnum.NEWEST;
    isVisible: boolean = false;

    constructor() {
    }

    SetSort(value: number): void {
        switch (value){
            case 1:
                this.sortNum = SortEnum.NEWEST;
                this.newstPortfolio.emit();
                break;
            case 2:
                this.sortNum = SortEnum.MOSTVISITED;
                this.mostVisitedPortfolio.emit();
                break;
        }
    }

    ToggleVisible(): void {
        this.isVisible = !this.isVisible;
    }

    test(val: any): void {
        console.log(val)
    }
}
