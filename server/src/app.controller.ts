import {Controller, Delete, Get, Param, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {unlink} from "fs";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): void {}

    @Get('public/:img')
    async ServeImage(@Param('img') img, @Res() res): Promise<any> {
        res.header("Cross-Origin-Resource-Policy", "same-site");
        res.sendFile(img, {root: 'public'});
    }

    @Delete('public/delete/:file')
    async DeleteImage(@Param('file') file, @Res() res): Promise<any> {

        unlink(`./public/${file}`, OnError);

        function OnError(err) {
            if(err) res.send(false);
            else res.send(true);
        }
    }

}
