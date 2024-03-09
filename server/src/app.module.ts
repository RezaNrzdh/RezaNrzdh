import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {MongooseModule} from "@nestjs/mongoose";
import {constants} from "./constant";
import {EmployerModule} from "./employer/employer.module";
import {SkillModule} from "./skill/skill.module";
import {PortfolioModule} from "./portfolio/portfolio.module";
import {AboutModule} from "./about/about.module";
import {OrderModule} from "./order/order.module";
import {ContactModule} from "./contact/contact.module";
import {BlogModule} from "./blog/blog.module";
import {AuthModule} from "./auth/auth.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from "path";
import {UserModule} from "./user/user.module";

@Module({
  imports: [
      MongooseModule.forRoot(constants.uri),
      ServeStaticModule.forRoot({
          rootPath: join(__dirname, '..', 'public')
      }),
      EmployerModule,
      SkillModule,
      PortfolioModule,
      AboutModule,
      OrderModule,
      ContactModule,
      BlogModule,
      AuthModule,
      UserModule
  ],
  controllers: [
      AppController,
  ],
  providers: [
      AppService
  ],
})
export class AppModule {}
