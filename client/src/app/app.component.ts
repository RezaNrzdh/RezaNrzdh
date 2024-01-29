import {Component, enableProdMode, OnInit} from '@angular/core';

//enableProdMode()

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'RezaNrzdh';

    constructor() {}

    ngOnInit() {}
}
