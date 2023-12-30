import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { JwtModule } from "@nestjs/jwt";

import {AboutController} from "./controller/about.controller";
import {EmployersController} from "./controller/employers.controller";
import {AboutService} from "./service/about.service";
import {EmployersService} from "./service/employers.service";
import {OrdersService} from "./service/orders.service";
import {OrdersController} from "./controller/orders.controller";
import {PortfolioService} from "./service/portfolio.service";
import {PortfolioController} from "./controller/portfolio.controller";
import {SkillsService} from "./service/skills.service";
import {SkillsController} from "./controller/skills.controller";
import {BlogService} from "./service/blog.service";
import {BlogController} from "./controller/blog.controller";
import {AuthController} from "./controller/auth.controller";
import {AuthService} from "./service/auth.service";
import {ContactController} from "./controller/contact.controller";
import {ContactService} from "./service/contact.service";

@Module({
  imports: [
      JwtModule.register({
          global: true,
          secret: "rytsdkahdewruweif",
          signOptions: { expiresIn: '1800s' }
      }),
  ],
  controllers: [
      AppController,
      AboutController,
      EmployersController,
      OrdersController,
      PortfolioController,
      SkillsController,
      BlogController,
      AuthController,
      ContactController
  ],
  providers: [
      AppService,
      AboutService,
      EmployersService,
      OrdersService,
      PortfolioService,
      SkillsService,
      BlogService,
      AuthService,
      ContactService
  ],
})
export class AppModule {}
