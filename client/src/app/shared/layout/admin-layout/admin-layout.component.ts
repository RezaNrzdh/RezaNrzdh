import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private titleService: Title) {
      this.titleService.setTitle('RezaNrzdh - Admin Panel');
  }

  ngOnInit(): void {
  }

}
