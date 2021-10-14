import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderBody } from './order';
import { QR } from './box';

@Controller()
export class AppController {
  private static currentId = 0;
  constructor(private readonly appService: AppService) {}

  @Post()
  postOrder(@Body() orderBody: OrderBody): any {
    return this.appService.saveOrder(orderBody);
  }

  @Get()
  getOrder(@Body() qr: QR): number {
    return this.appService.getBoxId(qr);
  }
}
