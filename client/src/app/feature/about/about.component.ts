import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutService} from "../../core/services/about.service";
import {ResponsiveService} from "../../core/services/responsive.service";
import {AboutModel} from "../../core/models/about.model";
import {Subscription} from "rxjs";
import {ResponsiveEnum} from "../../core/enum/responsive.enum";
import {Title} from "@angular/platform-browser";
import { DropdownComponent } from '../../shared/component/dropdown/dropdown.component';
import { ButtonComponent } from '../../shared/component/button/button.component';
import { IconComponent } from '../../shared/component/icon/icon.component';
import {BottomsheetComponent} from "../../shared/component/bottomsheet/bottomsheet.component";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: true,
    imports: [CommonModule, IconComponent, ButtonComponent, DropdownComponent, BottomsheetComponent,]
})
export class AboutComponent implements OnInit, OnDestroy {

    data: AboutModel = new AboutModel();
    show: boolean = false;
    tab: number = 0;
    isSmall: boolean = true;

    options: Array<string> = ['طراحی UIUX','برنامه نویسی','گرافیک دو بعدی','گرافیک سه بعدی','بازیسازی'];

    isVisible: boolean = false;
    ToggleVisible: any = () => { this.isVisible = !this.isVisible; };
    bottomsheetData = {
        title: "انتخاب مهارت ها",
        options: this.options
    }

    sub: Subscription;

    constructor(private AboutService: AboutService, private responsiveService: ResponsiveService, private titleService: Title) {
        this.titleService.setTitle("RezaNrzdh - About Me");
        this.sub = this.responsiveService.breakpoint.subscribe({
            next: ((value: any) => {
                value[ResponsiveEnum.SMALL] ? this.isSmall = true : this.isSmall = false;
            })
        })
    }

    ngOnInit(): void {
        this.AboutService.GetAbout().subscribe({
            next: ((value: any) => {
                this.data = value[0];
                this.show = true;
            }),
            error: ((error: any) => {
                console.log(error);
            })
        });
    }

    SetTabIndex(value: number): void {
        this.tab = value;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
