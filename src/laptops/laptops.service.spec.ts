import { Test, TestingModule } from '@nestjs/testing';
import { LaptopsService } from './laptops.service';

describe('LaptopsService', () => {
  let service: LaptopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaptopsService],
    }).compile();

    service = module.get<LaptopsService>(LaptopsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
