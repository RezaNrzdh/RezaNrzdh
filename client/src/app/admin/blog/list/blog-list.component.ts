import {Component, OnInit} from "@angular/core";
import {BlogService} from "../../../core/services/blog.service";
import {BlogModel} from "../../../core/models/blog.model";

@Component({
    selector: "admin-blog-list",
    templateUrl: "blog-list.component.html",
    styleUrls: ["blog-list.component.scss"]
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
        this.blogService.GetAllArticlesForAdmin(query).subscribe({
            next: ((value: any) => {
                this.data = value.data;
            })
        })
    }
}
