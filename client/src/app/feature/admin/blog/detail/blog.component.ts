import {Component, OnInit} from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../../../core/services/blog.service";
import {PublishConstant} from "../../../../core/constant/publish.constant";
import { ImagePathPipe } from "../../../../shared/pipe/image-path.pipe";
import { DropdownComponent } from "../../../../shared/component/dropdown/dropdown.component";
import { ButtonComponent } from "../../../../shared/component/button/button.component";
import { IconComponent } from "../../../../shared/component/icon/icon.component";
import { UploadfileComponent } from "../../../../shared/component/uploadfile/uploadfile.component";
import {NgFor, NgIf} from "@angular/common";
import { TextboxComponent } from "../../../../shared/component/textbox/textbox.component";
import {CalendarPipe} from "../../../../shared/pipe/calendar.pipe";
import {TagComponent} from "../../../../shared/component/tag/tag.component";
import {AlertService} from "../../../../core/services/alert.service";
import {AlertStateEnum} from "../../../../core/enum/alertState.enum";
import {AlertEnum} from "../../../../core/enum/alert.enum";

@Component({
    selector: "admin-blog",
    templateUrl: "blog.component.html",
    styleUrls: ["blog.component.scss"],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TextboxComponent,
        NgIf,
        NgFor,
        UploadfileComponent,
        IconComponent,
        ButtonComponent,
        DropdownComponent,
        ImagePathPipe,
        CalendarPipe,
        TagComponent
    ]
})
export class BlogComponent implements OnInit {

    blogForm: FormGroup | any;
    comment: Array<any> = [];
    pid: number;
    image: string;
    thumbnail: string;
    publish: Array<string> = [...PublishConstant];
    isSpin: boolean = false;

    constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService, private alertService: AlertService) {
        this.blogForm = new FormGroup({
            "title": new FormControl(null),
            "slug": new FormControl(null),
            "short": new FormControl(null),
            "read": new FormControl(null),
            "publish": new FormControl(false),
            "desc": new FormControl(null)
        });
    }

    ngOnInit() {
        if(this.activatedRoute.snapshot.params["slug"] !== "new"){
            this.blogService.GetArticleForAdmin(this.activatedRoute.snapshot.params["slug"]).subscribe({
                next: ((value: any) => {
                    this.blogForm.patchValue({
                        title: value.title,
                        short: value.short,
                        slug: value.slug,
                        read: value.read,
                        publish: value.publish ? 2 : 1,
                        desc: value.desc
                    });
                    this.comment = value.comment;
                    this.pid = value._id;
                    this.thumbnail = value.thumbnail;
                    this.image = value.img;
                })
            })
        }
    }

    OnSubmit(): void {
        if(this.blogForm.status === "INVALID" || this.isSpin) return;

        const query = {
            ...this.blogForm.value,
            publish: this.blogForm.value.publish == 2,
            img: this.image,
            thumbnail: this.thumbnail
        }

        if(this.activatedRoute.snapshot.params["slug"] == "new") this.OnCreateNewArticle(query);
        else this.OnModifyArticle(query);
    }

    OnCreateNewArticle(query: object): void {
        this.isSpin = true;
        this.blogService.CreateArticle(query).subscribe({
            next:((value: any) => {
                this.isSpin = false;
                if(value._id){
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({type: AlertStateEnum.SUCCESS, msg: AlertEnum.SuccessSubmit});
                }
                else {
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({type: AlertStateEnum.DANGER, msg: AlertEnum.DangerSubmit});
                }
            }),
            error: ((err: any) => {
                this.isSpin = false;
                this.alertService.SetIsHide(false);
                this.alertService.SetAlertInfo({type: AlertStateEnum.DANGER, msg: AlertEnum.DangerSubmit});
            })
        });
    }

    OnModifyArticle(query: object): void {
        this.isSpin = true;
        this.blogService.ModifyArticle(query).subscribe({
            next:((value: any) => {
                this.isSpin = false;
                if(value.acknowledged){
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({type: AlertStateEnum.SUCCESS, msg: AlertEnum.SuccessSubmit});
                }
                else {
                    this.alertService.SetIsHide(false);
                    this.alertService.SetAlertInfo({type: AlertStateEnum.DANGER, msg: AlertEnum.DangerSubmit});
                }
            })
        });
    }

    OnAddImages(imageName: any) {
        this.image = imageName.filename;
    }

    OnDeleteImages(imageName: any) {
        this.blogService.DeleteImage(imageName).subscribe({
            next: ((state: any) => {
                if(state){
                    this.thumbnail = "";
                }
            })
        });
    }

    OnAddThumbnail(value: any) {
        this.thumbnail = value.filename;
    }

    OnDeleteThumbnail(imageName: any) {
        this.blogService.DeleteImage(imageName).subscribe({
            next: ((state: any) => {
                if(state){
                    this.thumbnail = "";
                }
            })
        });
    }

    OnConfirmComment(pid: number, _id: any): void {
        const body = { pid: pid, _id: _id }
        this.blogService.ConfirmComments(body).subscribe({
            next:((value: any) => {
                this.comment = value.comment;
            })
        });
    }

    OnConfirmReplies(pid: number, replyId: any, _id: any): void {
        const body = { pid: pid, replyId: replyId, _id: _id }
        this.blogService.ConfirmReplies(body).subscribe({
            next:((value: any) => {
                this.comment = value.comment;
            })
        });
    }
}
