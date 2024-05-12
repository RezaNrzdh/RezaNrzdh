import {Injectable, Res} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Portfolio} from "../schema/portfolio.schema";
import {Blog} from "../schema/blog.schema";
import {User} from "../schema/user.schema";
import {readdir} from "fs";

@Injectable()
export class DashboardService {
    constructor(
        @InjectModel("Portfolio") private portfolioModel: Model<Portfolio>,
        @InjectModel("Blog") private blogModel: Model<Blog>,
        @InjectModel("User") private userModel: Model<User>,
    ) {
    }

    async GetStatistics(@Res() res): Promise<any> {
        const portfolio = await this.portfolioModel.countDocuments();
        const blog      = await this.blogModel.countDocuments();
        const user      = await this.userModel.countDocuments();

        readdir("./public", null, Callback);
        function Callback(err, files){
            res.json({
                portfolio: portfolio,
                blog: blog,
                user: user,
                files: files.length
            })
        }
    }
}