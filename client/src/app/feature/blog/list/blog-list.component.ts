import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../core/services/blog.service";
import {BlogModel} from "../../../core/models/blog.model";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

    isLoading: boolean = false;

    data: Array<BlogModel> = new Array<BlogModel>();
    otherData: Array<BlogModel> = new Array<BlogModel>();

    count: number = 0;
    limit: number = 9;
    offset: number = 0;

    constructor(private blogService: BlogService, private titleService: Title) {
        this.titleService.setTitle("RezaNrzdh - Blog");
        this.isLoading = true;
    }

    ngOnInit(): void {
        const query = {
            limit: this.limit,
            offset: this.offset
        }
        this.blogService.GetAllArticles(query).subscribe({
            next: ((value: any) => {
                this.data      = value.data.slice(0,3);
                this.otherData = value.data.slice(3);
                this.count  = value.count - this.limit;
                this.offset = this.limit;
                this.isLoading = false;
            })
        });
    }

    GetMoreArticle(): void {
        const query = {
            limit: this.limit,
            offset: this.offset
        }
        this.blogService.GetAllArticles(query).subscribe({
            next: ((value: any) => {
                this.otherData = this.otherData.concat(value.data);
                this.count  = this.count - value.data.length;
                this.offset = this.limit + this.offset;
            })
        })
    }
}
