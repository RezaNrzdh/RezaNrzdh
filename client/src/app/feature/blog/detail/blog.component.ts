import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../../core/services/blog.service";
import {BlogModel} from "../../../core/models/blog.model";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    data: BlogModel = new BlogModel();
    commentForm: FormGroup;

    constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) { }

    ngOnInit(): void {
        this.commentForm = new FormGroup({
            "name": new FormControl("null"),
            "email": new FormControl("null"),
            "comment": new FormControl("null")
        });

        this.blogService.GetArticle(this.activatedRoute.snapshot.params["slug"]).subscribe({
            next: ((value: any) => {
                this.data = value;
            }),
            error: ((err: any) => {
                console.log(err);
            })
        })
    }

    OnSubmit(): void {
        console.log(this.commentForm.value);
    }

}
