import {
    Controller,
    Delete, FileTypeValidator,
    Get, MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    Post,
    Res,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import { AppService } from './app.service';
import {unlink, readdir} from "fs";
import {AuthGuard} from "./guard/auth.guard";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {Express} from "express";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): void {}

    @Post('api/v1/saveImg')
    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor("file", {
        storage: diskStorage({
            destination: "public",
            filename: (req, file, callback) => {
                const name = `img-${Date.now()}.jpg`;
                callback(null, name);
            }
        })
    }))
    SaveImage(@UploadedFile(new ParseFilePipe({
        validators: [
            new MaxFileSizeValidator(   { maxSize: 500000 }),
            new FileTypeValidator({ fileType: "image/jpeg" })
        ]
    })) file: Express.Multer.File) {
        return file;
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
