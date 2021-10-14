export enum Status {
  free,
  taken,
  full,
}

export type Boxes = Status[];

export interface QR {
  qrStr: string;
}
