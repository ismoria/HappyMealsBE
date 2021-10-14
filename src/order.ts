export interface OrderBody {
  order: number[];
}

export interface Order {
  id: number;
  items: number[];
  qr: string;
  boxId: number;
}
