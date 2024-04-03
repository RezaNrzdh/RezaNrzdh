import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../../core/services/blog.service";
import {BlogModel} from "../../../core/models/blog.model";
import { ImagePathPipe } from '../../../shared/pipe/image-path.pipe';
import { CalendarPipe } from '../../../shared/pipe/calendar.pipe';
import { CommentComponent } from '../../../shared/component/comment/comment.component';
import { NgIf, NgFor } from '@angular/common';
import { ButtonComponent } from '../../../shared/component/button/button.component';
import { TextboxComponent } from '../../../shared/component/textbox/textbox.component';
import { IconComponent } from '../../../shared/component/icon/icon.component';
import {ShareComponent} from "../../../shared/component/share/share.component";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    standalone: true,
    imports: [
        IconComponent, FormsModule, ReactiveFormsModule, TextboxComponent,
        ButtonComponent, NgIf, NgFor, CommentComponent, CalendarPipe, ImagePathPipe, ShareComponent
    ]
})
export class BlogComponent implements OnInit {

    data: BlogModel = new BlogModel();
    share: boolean = false;
    currentUrl: string;
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
                        this.currentUrl = document.URL;
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
            body: {
                isArticle: true,
                ...this.commentForm.value
            }
        }
        this.blogService.CreateComment(query).subscribe({
            next: ((value: any) => {
                this.commentForm.markAsPristine();
                this.commentForm.markAsUntouched();
                this.commentForm.reset({ name: "", email: "", comment: "" });
            })
        })
    }

    ToggleShare(): void {
        this.share = !this.share;
    }
}
