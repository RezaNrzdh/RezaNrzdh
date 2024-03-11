import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpInterceptorService} from "../../../core/interceptor/http.interceptor";

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    standalone: true,
    imports: [
        HeaderComponent,
        RouterOutlet,
        FooterComponent
    ]
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
