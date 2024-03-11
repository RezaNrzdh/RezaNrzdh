import {Pipe, PipeTransform} from "@angular/core";
import {PublishConstant} from "../../core/constant/publish.constant";

@Pipe({
    name: "Publish"
})
export class PublishPipe implements PipeTransform {
    transform(value: any): any {
        if(typeof value == "number"){
            return PublishConstant[value - 1];
        }
        else {
            switch (value){
                case true: return PublishConstant[1];
                case false: return PublishConstant[0];
            }
        }
    }
}
