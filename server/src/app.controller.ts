import {
    Controller, Delete, Get,
    Param, Post, Res, UploadedFile,
    UseGuards, UseInterceptors
} from '@nestjs/common';
import {unlink, readdir, writeFile} from "fs";
import {AuthGuard} from "./guard/auth.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {Express} from "express";

@Controller()
export class AppController {
    constructor() {}

    @Get()
    getHello(): void {
        console.log("Hello");
    }

    @Post("api/v1/saveImg2")
    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor('file'))
    SaveImage2(@UploadedFile() file: Express.Multer.File, @Res() res) {
        const name = `img-${Date.now()}.jpg`;
        writeFile(`public/${name}`,file.buffer, (err) => {
            if(err) res.send(false);
            else res.send({filename: name});
        });
    }

    @Get('public/:img')
    async ServeImage(@Param('img') img, @Res() res): Promise<any> {
        res.header("Cross-Origin-Resource-Policy", "cross-origin");
        res.sendFile(img, {root: 'public'});
    }

    @Delete('public/delete/:file')
    @UseGuards(AuthGuard)
    async DeleteImage(@Param('file') file, @Res() res): Promise<any> {
        unlink(`./public/${file}`, Callback);
        function Callback(err) {
            if(err) res.send(false);
            else res.send(true);
        }
    }

    @Get("public/read/files")
    @UseGuards(AuthGuard)
    async ReadImages(@Res() res): Promise<any> {
        readdir("./public", null, Callback);
        function Callback(err, files) {
            if(err) res.send(err);
            else res.send(files)
        }
    }

}
