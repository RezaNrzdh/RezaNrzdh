import { Component, OnInit } from '@angular/core';
import {EmployersService} from "../../../../core/services/employers.service";
import {EmployersModel} from "../../../../core/models/employers.model";

@Component({
    selector: 'app-home-employers',
    templateUrl: './employers.component.html',
    styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit {

    data: Array<EmployersModel>;

    constructor(private EmployerService: EmployersService) { }

    ngOnInit(): void {
        this.EmployerService.GetEmployersComment().subscribe({
            next: ((value: any) => {
                this.data = value;
            }),
            error: ((error: any) => {
                console.log(error)
            })
        });
    }

}
