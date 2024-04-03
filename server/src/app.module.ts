import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {constants} from "./constant";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from "path";

import {JwtModule} from "@nestjs/jwt";

import {EmployerSchema} from "./schema/employer.schema";
import {SkillSchema} from "./schema/skill.schema";
import {PortfolioSchema} from "./schema/portfolio.schema";
import {AboutSchema} from "./schema/about.schema";
import {OrderSchema} from "./schema/order.schema";
import {ContactSchema} from "./schema/contact.schema";
import {BlogSchema} from "./schema/blog.schema";
import {AuthSchema} from "./schema/auth.schema";
import {UserSchema} from "./schema/user.schema";

import {EmployersController} from "./controller/employers.controller";
import {EmployersService} from "./service/employers.service";
import {SkillsController} from "./controller/skills.controller";
import {PortfolioController} from "./controller/portfolio.controller";
import {AboutController} from "./controller/about.controller";
import {OrdersController} from "./controller/orders.controller";
import {ContactController} from "./controller/contact.controller";
import {BlogController} from "./controller/blog.controller";
import {AuthController} from "./controller/auth.controller";

import {UserController} from "./controller/user.controller";
import {SkillsService} from "./service/skills.service";
import {PortfolioService} from "./service/portfolio.service";
import {AboutService} from "./service/about.service";
import {OrdersService} from "./service/orders.service";
import {ContactService} from "./service/contact.service";
import {BlogService} from "./service/blog.service";
import {AuthService} from "./service/auth.service";
import {UserService} from "./service/user.service";
import {NewsletterService} from "./service/newsletter.service";
import {NewsletterController} from "./controller/newsletter.controller";
import {NewsletterSchema} from "./schema/newsletter.schema";

@Module({
  imports: [
      MongooseModule.forRoot(constants.uri),
      ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public')}),
      JwtModule.register({ global: true, secret: constants.secret, signOptions: { expiresIn: constants.expires }}),
      MongooseModule.forFeature([{ name: "Employer", schema: EmployerSchema }]),
      MongooseModule.forFeature([{ name: "Skill", schema: SkillSchema }]),
      MongooseModule.forFeature([{ name: "Portfolio", schema: PortfolioSchema }]),
      MongooseModule.forFeature([{ name: "About", schema: AboutSchema }]),
      MongooseModule.forFeature([{ name: "Order", schema: OrderSchema }]),
      MongooseModule.forFeature([{ name: "Contact", schema: ContactSchema }]),
      MongooseModule.forFeature([{ name: "Blog", schema: BlogSchema }]),
      MongooseModule.forFeature([{ name: "Auth", schema: AuthSchema }]),
      MongooseModule.forFeature([{ name: "User", schema: UserSchema }]),
      MongooseModule.forFeature([{ name: "Newsletter", schema: NewsletterSchema }])
  ],
  controllers: [
      AppController,
      EmployersController,
      SkillsController,
      PortfolioController,
      AboutController,
      OrdersController,
      ContactController,
      BlogController,
      AuthController,
      UserController,
      NewsletterController
  ],
  providers: [
      AppService,
      EmployersService,
      SkillsService,
      PortfolioService,
      AboutService,
      OrdersService,
      ContactService,
      BlogService,
      AuthService,
      UserService,
      NewsletterService
  ],
})
export class AppModule {}
