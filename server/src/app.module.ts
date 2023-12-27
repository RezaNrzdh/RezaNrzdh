import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';

import {AboutController} from "./controller/about.controller";
import {EmployersController} from "./controller/employers.controller";
import {AboutService} from "./service/about.service";
import {EmployersService} from "./service/employers.service";
import {OrdersService} from "./service/orders.service";
import {OrdersController} from "./controller/orders.controller";
import {PortfolioService} from "./service/portfolio.service";
import {PortfolioController} from "./controller/portfolio.controller";

@Module({
  imports: [],
  controllers: [
      AppController,
      AboutController,
      EmployersController,
      OrdersController,
      PortfolioController
  ],
  providers: [
      AppService,
      AboutService,
      EmployersService,
      OrdersService,
      PortfolioService
  ],
})
export class AppModule {}
