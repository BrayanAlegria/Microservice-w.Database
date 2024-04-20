import { Test, TestingModule } from '@nestjs/testing';
import { MicappController } from './micapp.controller';
import { MicappService } from './micapp.service';

describe('MicappController', () => {
  let micappController: MicappController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicappController],
      providers: [MicappService],
    }).compile();

    micappController = app.get<MicappController>(MicappController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(micappController.getHello()).toBe('Hello World!');
    });
  });
});
