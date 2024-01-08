import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../core/services/blog.service";
import {BlogModel} from "../../../core/models/blog.model";
import {from, map, of, skip, take, tap} from "rxjs";

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

    isLoading: boolean = false;
    data: Array<BlogModel> = new Array<BlogModel>();
    otherData: Array<BlogModel> = new Array<BlogModel>();

    constructor(private blogService: BlogService) {
        this.isLoading = true;
    }

    ngOnInit(): void {
        this.blogService.GetAllArticles().subscribe({
            next: ((value: any) => {
                this.data = value.slice(0,3);
                this.otherData = value.slice(3);
                this.isLoading = false;
            })
        });
    }

}
