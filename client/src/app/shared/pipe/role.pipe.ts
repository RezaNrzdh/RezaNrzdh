import {Pipe, PipeTransform} from "@angular/core";
import {RoleConstant} from "../../core/constant/role.constant";

@Pipe({
    name: "Role",
    standalone: true
})
export class RolePipe implements PipeTransform {
    transform(value: any): any {
        return RoleConstant[value-1];
    }
}
