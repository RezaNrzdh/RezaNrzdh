import {Component, OnInit} from "@angular/core";
import {CategoryConstant} from "../../../core/constant/category.constant";
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {environment} from "../../../../environments/environment"
import {ActivatedRoute} from "@angular/router";
import {PublishConstant} from "../../../core/constant/publish.constant";
import { DropdownComponent } from "../../../shared/component/dropdown/dropdown.component";
import { ButtonComponent } from "../../../shared/component/button/button.component";
import { IconComponent } from "../../../shared/component/icon/icon.component";
import { UploadfileComponent } from "../../../shared/component/uploadfile/uploadfile.component";
import { TextboxComponent } from "../../../shared/component/textbox/textbox.component";
import { AlertboxComponent } from "../../../shared/component/alertbox/alertbox.component";
import {NgIf, NgFor, NgClass} from "@angular/common";
import {CalendarPipe} from "../../../shared/pipe/calendar.pipe";
import {TagComponent} from "../../../shared/component/tag/tag.component";

@Component({
    selector: "admin-portfolio",
    templateUrl: "portfolio.component.html",
    styleUrls: ["portfolio.component.scss"],
    standalone: true,
    imports: [NgIf, AlertboxComponent, FormsModule, ReactiveFormsModule, TextboxComponent, UploadfileComponent, NgFor, IconComponent, ButtonComponent, DropdownComponent, CalendarPipe, NgClass, TagComponent]
})
export class PortfolioComponent implements OnInit {

    portfolioForm: FormGroup | any;
    option: Array<string> = [...CategoryConstant];
    publish: Array<string> = [...PublishConstant];
    pid: number;
    comment: Array<any> = [];
    images: Array<string> = [];
    thumbnail: string;

    alertbox: boolean = false;
    isSpin: boolean = false;
    env: string = environment.static;

    constructor(
        private portfolioService: PortfolioService,
        private activatedRoute: ActivatedRoute)
    {
        this.portfolioForm = new FormGroup({
            "title": new FormControl(null, [Validators.required]),
            "slug": new FormControl(null, [Validators.required]),
            "category": new FormControl(1, [Validators.required]),
            "publish": new FormControl(1, [Validators.required]),
            "desc": new FormControl(null, [Validators.required])
        });
    }

    ngOnInit() {
        if(this.activatedRoute.snapshot.params["slug"] !== "new"){
            this.portfolioService.GetPortfolioForAdmin(this.activatedRoute.snapshot.params["slug"]).subscribe({
                next: ((value: any) => {
                    this.portfolioForm.patchValue({
                        title: value.title,
                        slug: value.slug,
                        desc: value.desc,
                        category: value.category,
                        publish: value.publish
                    });
                    this.pid = value._id;
                    this.comment = value.comment;
                    this.thumbnail = value.thumbnail;
                    this.images = [...this.images, ...value.img];
                })
            })
        }
    }

    OnSubmit(): void {
        if(this.portfolioForm.status === "INVALID" || this.isSpin) return;

        const query = {
            ...this.portfolioForm.value,
            img: this.images,
            thumbnail: this.thumbnail
        }
        if(this.activatedRoute.snapshot.params["slug"] == "new") this.OnCreateNewPortfolio(query);
        else this.OnModifyPortfolio(query);

    }

    OnCreateNewPortfolio(query: object): void {
        this.isSpin = true;
        this.portfolioService.CreatePortfolio(query).subscribe({
            next: ((value: any) => {
                this.isSpin = false;
                this.alertbox = true;
            })
        })
    }

    OnModifyPortfolio(query: object): void {
        this.isSpin = true;
        this.portfolioService.ModifyPortfolio(query).subscribe({
            next: ((value: any) => {
                this.isSpin = false;
                this.alertbox = true;
            })
        })
    }

    OnAlertBoxHide(value: boolean): void {
        this.alertbox = value;
    }

    OnAddImages(value: any): void {
        this.images = [...this.images, value.filename];
    }

    OnDeleteImages(imageName: string): void {
        this.portfolioService.DeleteImage(imageName).subscribe({
            next: ((state: any) => {
                if(state){
                    const index = this.images.indexOf(imageName);
                    if(index > -1) this.images.splice(index,1);
                }
            })
        })
    }

    OnAddThumbnail(value: any): void {
        this.thumbnail = value.filename;
    }

    OnDeleteThumbnail(imageName: string): void {
        this.portfolioService.DeleteImage(imageName).subscribe({
            next: ((state: any) => {
                if(state){
                    this.thumbnail = "";
                }
            })
        })
    }

    OnConfirmComment(pid: number, _id: any): void {
        const body = { pid: pid, _id: _id }
        this.portfolioService.ConfirmComments(body).subscribe({
            next:((value: any) => {
                console.log(value);
            })
        })
    }

    OnConfirmReplies(pid: number, replyId: any, _id: any): void {
        const body = { pid: pid, replyId: replyId, _id: _id }
        this.portfolioService.ConfirmReplies(body).subscribe({
            next:((value: any) => {
                console.log(value);
            })
        })
    }
}
