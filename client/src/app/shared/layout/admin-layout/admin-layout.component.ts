import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { RouterOutlet } from '@angular/router';
import { AdminSideComponent } from '../../component/adminSide/adminSide.component';
import { AdminHeaderComponent } from '../../component/adminHeader/adminHeader.component';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss'],
    standalone: true,
    imports: [AdminHeaderComponent, AdminSideComponent, RouterOutlet]
})
export class AdminLayoutComponent implements OnInit {

  constructor(private titleService: Title) {
      this.titleService.setTitle('RezaNrzdh - Admin Panel');
  }

  ngOnInit(): void {
  }

}
