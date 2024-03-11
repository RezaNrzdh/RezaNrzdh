import {Component, OnInit} from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../../core/services/blog.service";
import {PublishConstant} from "../../../core/constant/publish.constant";
import { ImagePathPipe } from "../../../shared/pipe/image-path.pipe";
import { DropdownComponent } from "../../../shared/component/dropdown/dropdown.component";
import { ButtonComponent } from "../../../shared/component/button/button.component";
import { IconComponent } from "../../../shared/component/icon/icon.component";
import { UploadfileComponent } from "../../../shared/component/uploadfile/uploadfile.component";
import { NgIf } from "@angular/common";
import { TextboxComponent } from "../../../shared/component/textbox/textbox.component";

@Component({
    selector: "admin-blog",
    templateUrl: "blog.component.html",
    styleUrls: ["blog.component.scss"],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TextboxComponent, NgIf, UploadfileComponent, IconComponent, ButtonComponent, DropdownComponent, ImagePathPipe]
})
export class BlogComponent implements OnInit {

    blogForm: FormGroup | any;
    image: string;
    thumbnail: string;
    publish: Array<string> = [...PublishConstant];
    isSpin: boolean = false;

    constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) {
        this.blogForm = new FormGroup({
            "title": new FormControl(null),
            "slug": new FormControl(null),
            "read": new FormControl(null),
            "publish": new FormControl(false),
            "desc": new FormControl(null)
        });
    }

    ngOnInit() {
        if(this.activatedRoute.snapshot.params["slug"] !== "new"){
            this.blogService.GetArticle(this.activatedRoute.snapshot.params["slug"]).subscribe({
                next: ((value: any) => {
                    this.blogForm.patchValue({
                        title: value.title,
                        slug: value.slug,
                        read: value.read,
                        publish: value.publish,
                        desc: value.desc
                    });
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
            next:(() => {
                this.isSpin = false;
            })
        });
    }

    OnModifyArticle(query: object): void {
        this.isSpin = true;
        this.blogService.ModifyArticle(query).subscribe({
            next:(() => {
                this.isSpin = false;
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
}
