import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    Patch,
    UseInterceptors,
    UploadedFile,
    ParseFilePipe,
    MaxFileSizeValidator,
    FileTypeValidator,
} from "@nestjs/common";
import {FileInterceptor} from "@nestjs/platform-express";
import {PortfolioService} from "./portfolio.service";
import {Express} from "express";
import {diskStorage} from "multer";


@Controller("api/v1/portfolio")
export class PortfolioController {
    constructor(private portfolioService: PortfolioService) {}

    @Get("limit")
    GetAllPortfolios(@Query() query): any {
        return this.portfolioService.GetAllPortfolios(query);
    }

    @Get(":slug")
    GetPortfolio(@Param("slug") slug): any {
        return this.portfolioService.GetPortfolio(slug);
    }

    @Get("top/:number")
    GetTopPortfolios(@Param('number') number): any {
        return this.portfolioService.GetTopPortfolios(number);
    }

    @Post()
    CreatePortfolio(@Body() body: object): any {
        return this.portfolioService.CreatePortfolio(body);
    }

    @Patch()
    ModifyPortfolio(@Body() body: object): any {
        return this.portfolioService.ModifyPortfolio(body);
    }

    @Post('saveImg')
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

    @Patch("comment")
    CreateComment(@Body() body: object): any {
        return this.portfolioService.CreateComment(body);
    }

    @Patch("reply")
    CreateReply(@Body() body: object): object {
        return this.portfolioService.CreateReply(body);
    }
}