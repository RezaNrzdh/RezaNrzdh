import { Component, OnInit } from '@angular/core';
import {AboutService} from "../../core/services/about.service";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    data: any;
    tab: number = 0;

    constructor(private AboutService: AboutService) { }

    ngOnInit(): void {
        this.data = this.AboutService.GetAbout();
        console.log(this.data);
    }

    SetTabIndex(value: number): void {
        this.tab = value;
    }

}
