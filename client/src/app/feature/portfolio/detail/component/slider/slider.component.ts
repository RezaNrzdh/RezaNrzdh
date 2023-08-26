import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";

@Component({
    selector: "app-portfolio-slider",
    templateUrl: "slider.component.html",
    styleUrls: ["slider.component.scss"]
})
export class SliderComponent implements OnInit, AfterViewInit {

    @ViewChild("test") Test: any;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        console.log(this.Test);
    }
}

