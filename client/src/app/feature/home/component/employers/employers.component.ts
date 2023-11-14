import { Component, OnInit } from '@angular/core';
import {EmployersService} from "../../../../core/services/employers.service";

@Component({
    selector: 'app-home-employers',
    templateUrl: './employers.component.html',
    styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit {

    data: any;

    constructor(private EmployerService: EmployersService) { }

    ngOnInit(): void {
        this.data = this.EmployerService.GetEmployersComment();
    }

}
