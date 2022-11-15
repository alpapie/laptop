import { Test, TestingModule } from '@nestjs/testing';
import { LaptopsController } from './laptops.controller';
import { LaptopsService } from './laptops.service';

describe('LaptopsController', () => {
  let controller: LaptopsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaptopsController],
      providers: [LaptopsService],
    }).compile();

    controller = module.get<LaptopsController>(LaptopsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
