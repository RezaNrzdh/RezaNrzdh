import {Component, OnInit} from "@angular/core";
import {ButtonComponent} from "../../../../shared/component/button/button.component";
import {AboutService} from "../../../../core/services/about.service";
import {NgFor} from "@angular/common";

@Component({
    selector: "admin-language-list",
    templateUrl: "language-list.component.html",
    styleUrls: ["language-list.component.scss"],
    standalone: true,
    imports: [
        ButtonComponent,
        NgFor
    ]
})
export class LanguageListComponent implements OnInit {

    data: any;

    constructor(private aboutService: AboutService) {}

    ngOnInit() {
        this.aboutService.GetLanguages().subscribe({
            next: ((lang: any) => {
                this.data = lang.language;
            })
        })
    }
}
