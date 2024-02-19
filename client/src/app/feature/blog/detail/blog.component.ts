import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
    commentForm: FormGroup | any;

    constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) { }

    ngOnInit(): void {
        this.commentForm = new FormGroup({
            "name": new FormControl(null, [Validators.required]),
            "email": new FormControl(null, [Validators.required, Validators.email]),
            "comment": new FormControl(null, [Validators.required])
        });
        this.OnGetArticle();
    }

    OnGetArticle(): void{
        this.activatedRoute.params.subscribe({
            next: ((value: any) => {
                this.blogService.GetArticle(value.slug).subscribe({
                    next:((value: any) => {
                        this.data = value;
                    })
                })
            })
        });
    }

    OnSubmit(): void {
        if(this.commentForm.status === "INVALID") return;

        const query ={
            pid: this.data._id,
            body: this.commentForm.value
        }
        this.blogService.CreateComment(query).subscribe({
            next: ((value: any) => {
                this.commentForm.markAsPristine();
                this.commentForm.markAsUntouched();
                this.commentForm.reset({ name: "", email: "", comment: "" });
            })
        })
    }

    OnCreateReply(body: any): void {
        this.blogService.CreateReply(body).subscribe({
            next: ((value: any) => {
                this.commentForm.markAsPristine();
                this.commentForm.markAsUntouched();
                this.commentForm.reset({ name: "", email: "", comment: "" });
            })
        });
    }
}
