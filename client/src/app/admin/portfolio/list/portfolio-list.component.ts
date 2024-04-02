import {Component, OnInit} from "@angular/core";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {PortfolioModel} from "../../../core/models/portfolio.model";
import { ImagePathPipe } from "../../../shared/pipe/image-path.pipe";
import { PublishPipe } from "../../../shared/pipe/publish.pipe";
import { CategoryPipe } from "../../../shared/pipe/category.pipe";
import { CalendarPipe } from "../../../shared/pipe/calendar.pipe";
import { IconComponent } from "../../../shared/component/icon/icon.component";
import { RouterLink } from "@angular/router";
import { TagComponent } from "../../../shared/component/tag/tag.component";
import { NgFor, NgIf } from "@angular/common";
import { ButtonComponent } from "../../../shared/component/button/button.component";
import {map} from "rxjs";

@Component({
    selector: "admin-portfolio-list",
    templateUrl: "portfolio-list.component.html",
    styleUrls: ["portfolio-list.component.scss"],
    standalone: true,
    imports: [ButtonComponent, NgFor, TagComponent, NgIf, RouterLink, IconComponent, CalendarPipe, CategoryPipe, PublishPipe, ImagePathPipe]
})
export class PortfolioListComponent implements OnInit {

    data: Array<PortfolioModel>;
    count: number = 0;
    skip: number = 0;
    limit: number = 16;
    sortBy: string = "id";

    constructor(private portfolioService: PortfolioService) {}

    ngOnInit() {
        const query = {
            skip: this.skip,
            limit: this.limit,
            sortBy: this.sortBy
        }
        this.portfolioService.GetAllPortfolio(query).pipe(map((value, index) => {
            value.data.forEach((val: any) => {
                val.comment = val.comment + val.reply;
                delete val.reply;
            });
            return value;
        })).subscribe({
            next: ((value: any) => {
                this.count = value.count - this.limit;
                this.skip  = this.limit;
                this.data  = value.data;
            })
        });
    }

    OnGetMorePortfolio(): void {
        const query = {
            skip: this.skip,
            limit: this.limit,
            sortBy: this.sortBy
        }
        this.portfolioService.GetAllPortfolio(query).subscribe({
            next: ((value: any) => {
                this.count = this.count - value.data.length;
                this.skip  = this.limit + this.skip;
                this.data  = this.data.concat(value.data);
            })
        });
    }
}
