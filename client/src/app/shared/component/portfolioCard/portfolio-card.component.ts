import {Component, Input, OnInit} from "@angular/core";
import {environment} from "../../../../environments/environment";
import { CategoryPipe } from "../../pipe/category.pipe";
import { TagComponent } from "../tag/tag.component";
import { IconComponent } from "../icon/icon.component";
import { RouterLink } from "@angular/router";
import { NgClass, NgIf } from "@angular/common";

@Component({
    selector: "app-portfoliocard",
    templateUrl: "portfolio-card.component.html",
    styleUrls: ["portfolio-card.component.scss"],
    standalone: true,
    imports: [NgClass, RouterLink, IconComponent, NgIf, TagComponent, CategoryPipe]
})
export class PortfolioCardComponent implements OnInit {

    @Input() title: string;
    @Input() slug: string;
    @Input() category: number;
    @Input() visit: number = 0;
    @Input() like:  number = 0;
    @Input() imageURL: string;

    @Input() isOutline: boolean = false;
    @Input() isList: boolean = true;

    env: string = environment.static;

    constructor() {}

    ngOnInit() {}
}
