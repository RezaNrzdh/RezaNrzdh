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
import {GuestComponent} from "../../../shared/component/guest/guest.component";
import {UserService} from "../../../core/services/user.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    standalone: true,
    imports: [
        IconComponent, FormsModule, ReactiveFormsModule, TextboxComponent,
        ButtonComponent, NgIf, NgFor, CommentComponent, CalendarPipe, ImagePathPipe, ShareComponent, GuestComponent
    ]
})
export class BlogComponent implements OnInit {

    data: BlogModel = new BlogModel();
    share: boolean = false;
    guest: boolean = false;
    currentUrl: string;
    commentForm: FormGroup | any;

    allArticleVisits: any;
    allArticlesLikes: any;
    isLiked: boolean = false;

    subUser: Subscription;

    constructor(
        private activatedRoute: ActivatedRoute,
        private blogService: BlogService,
        private userService: UserService
    ) { }

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
                this.isLiked = false;
                this.blogService.GetArticle(value.slug).subscribe({
                    next:((value: any) => {
                        this.currentUrl = document.URL;
                        this.data = value;
                        this.CheckIsLiked();
                        this.SubmitVisit();
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

    CheckIsLiked(): void {
        const _localstorage = localStorage.getItem("userLikes");
        if(_localstorage){
            this.allArticlesLikes = { ...JSON.parse(_localstorage) };
            const isCurrentArticle = this.allArticlesLikes.a.find((e: any) => e == this.data._id);
            if(isCurrentArticle) this.isLiked = true;
        }
        else {
            this.allArticlesLikes = {a:[], p:[]};
        }
    }

    SubmitLike(): void {
        const body = { pid: this.data._id }
        this.blogService.CreateLike(body).subscribe({
            next: ((value) => {
                if(value.acknowledged){
                    this.allArticlesLikes = {
                        ...this.allArticlesLikes,
                        a: [...this.allArticlesLikes.a, this.data._id]
                    }
                    localStorage.setItem("userLikes", JSON.stringify(this.allArticlesLikes));
                    this.data = {...this.data, like: this.data.like + 1};
                    this.isLiked = true;
                }
            })
        })
    }

    SubmitVisit(): void {
        const body = { pid: this.data._id }
        const _localstorage = localStorage.getItem("userVisits");

        if(_localstorage) this.allArticleVisits = { ...JSON.parse(_localstorage) };
        else this.allArticleVisits = {a:[], p:[]};

        if(!this.allArticleVisits.a.find((e: any) => e == this.data._id )){
            this.blogService.CreateVisit(body).subscribe({
                next: ((value) => {
                    if(value.acknowledged) {
                        this.allArticleVisits = {
                            ...this.allArticleVisits,
                            a: [...this.allArticleVisits.a, this.data._id]
                        }
                        localStorage.setItem("userVisits", JSON.stringify(this.allArticleVisits));
                    }
                })
            });
        }
    }

    ToggleShare(): void {
        this.share = !this.share;
    }

    ToggleGuest(): void {
        this.guest = !this.guest;
    }
}
