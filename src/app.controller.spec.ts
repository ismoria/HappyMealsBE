import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    test('post order & get box', () => {
      const appController = app.get<AppController>(AppController);
      const qrStr = appController.postOrder({ order: [1, 2, 3] });
      //expect(qr).toBe(String);
      const box = appController.getOrder({ qrStr: qrStr });
      //expect(box).toBe(Number);
    });
  });
});
