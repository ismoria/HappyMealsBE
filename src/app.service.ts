import { Injectable } from '@nestjs/common';
import { OrderBody, Order } from './order';
import { Boxes, QR, Status } from './box';

@Injectable()
export class AppService {
  private orders: Map<string, Order>;
  private boxes: Boxes;

  private static getQr(): string {
    return new Date().getTime().toString();
  }

  private getFreeBox(): number {
    return this.boxes.indexOf(Status.free);
  }

  constructor() {
    this.orders = new Map<string, Order>();
    this.boxes = new Array<Status>(100).fill(Status.free); // 100?
  }

  public saveOrder(orderBody: OrderBody): string {
    const newOrder: Order = {
      items: orderBody.order,
      id: this.orders.size + 1,
      boxId: this.getFreeBox(),
      qr: AppService.getQr(),
    };

    this.orders.set(newOrder.qr, newOrder);
    this.updateBox(newOrder.boxId, Status.full); // taken?
    return newOrder.qr;
  }

  public getBoxId(qr: QR): number {
    if (!this.orders.has(qr.qrStr)) {
      return -1;
    }
    const boxId = this.orders.get(qr.qrStr).boxId;
    this.updateBox(boxId, Status.free);
    return boxId;
  }

  public updateBox(boxId: number, status: Status): void {
    this.boxes[boxId] = status;
  }
}

