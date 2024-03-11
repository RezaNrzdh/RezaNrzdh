import { Component, OnInit } from '@angular/core';
import { IconComponent } from '../../../../shared/component/icon/icon.component';

@Component({
    selector: 'app-home-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss'],
    standalone: true,
    imports: [IconComponent]
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
