import {Component, OnInit} from "@angular/core";
import {BlogService} from "../../../core/services/blog.service";
import {BlogModel} from "../../../core/models/blog.model";
import { PublishPipe } from "../../../shared/pipe/publish.pipe";
import { CalendarPipe } from "../../../shared/pipe/calendar.pipe";
import { IconComponent } from "../../../shared/component/icon/icon.component";
import { RouterLink } from "@angular/router";
import { TagComponent } from "../../../shared/component/tag/tag.component";
import { NgFor, NgIf } from "@angular/common";
import { ButtonComponent } from "../../../shared/component/button/button.component";
import {map} from "rxjs";

@Component({
    selector: "admin-blog-list",
    templateUrl: "blog-list.component.html",
    styleUrls: ["blog-list.component.scss"],
    standalone: true,
    imports: [ButtonComponent, NgFor, NgIf, TagComponent, RouterLink, IconComponent, CalendarPipe, PublishPipe]
})
export class BlogListComponent implements OnInit {

    data: Array<BlogModel>;
    count: number = 0;
    skip: number = 0;
    limit: number = 9;
    sortBy: string = "id";

    constructor(private blogService: BlogService) {
    }

    ngOnInit() {
        const query = {
            skip: this.skip,
            limit: this.limit,
            sortBy: this.sortBy
        }
        this.blogService.GetAllArticlesForAdmin(query).pipe(map((value, index) => {
            value.data.forEach((val: any) => {
                val.comment = val.comment + val.reply;
                delete val.reply;
            })
            return value;
        })).subscribe({
            next: ((value: any) => {
                this.data = value.data;
            })
        })
    }
}
