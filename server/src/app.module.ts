import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from "@nestjs/jwt";

import {BlogService} from "./blog/blog.service";
import {BlogController} from "./blog/blog.controller";
import {AuthController} from "./auth/auth.controller";
import {AuthService} from "./auth/auth.service";
import {ContactController} from "./contact/contact.controller";
import {ContactService} from "./contact/contact.service";
import {MongooseModule} from "@nestjs/mongoose";
import {constants} from "./constant";
import {EmployerModule} from "./employer/employer.module";
import {SkillModule} from "./skill/skill.module";
import {PortfolioModule} from "./portfolio/portfolio.module";
import {AboutModule} from "./about/about.module";
import {OrderModule} from "./order/order.module";

@Module({
  imports: [
      JwtModule.register({
          global: true,
          secret: constants.secret,
          signOptions: { expiresIn: constants.expires }
      }),
      MongooseModule.forRoot(constants.uri),
      EmployerModule,
      SkillModule,
      PortfolioModule,
      AboutModule,
      OrderModule
  ],
  controllers: [
      AppController,
      BlogController,
      AuthController,
      ContactController
  ],
  providers: [
      AppService,
      BlogService,
      AuthService,
      ContactService
  ],
})
export class AppModule {}
