import {Component, enableProdMode, HostBinding} from '@angular/core';
import {Router,NavigationStart} from "@angular/router";
enableProdMode();

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'RezaNrzdh';

    @HostBinding("class.indexpage") IndexPage = false;

    constructor(private router: Router) {
        this.router.url === "/" ? this.IndexPage = true : this.IndexPage = false;
        this.router.url === "/contact" ? this.IndexPage = true :this.IndexPage = false;

        this.router.events.subscribe(event => {
            if(event instanceof NavigationStart){
                event.url === "/" ? this.IndexPage = true : this.IndexPage = false;
                event.url === "/contact" ? this.IndexPage = true : this.IndexPage = false;
            }
        })
    }


}
