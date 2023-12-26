import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    data: any;
    commentForm: FormGroup;

    constructor() { }

    ngOnInit(): void {
        this.commentForm = new FormGroup({
            "name": new FormControl("null"),
            "email": new FormControl("null"),
            "comment": new FormControl("null")
        })
    }

    OnSubmit(): void {
        console.log(this.commentForm.value);
    }

}
