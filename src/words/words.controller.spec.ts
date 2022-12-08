import { DomainModule, DomainService } from '@app/domain';
import { DbService } from '@app/domain/db.service';
import { Test, TestingModule } from '@nestjs/testing';
import { WordsController } from './words.controller';
import { WordsService } from './words.service';

describe('WordsController', () => {
  let controller: WordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DomainModule],
      controllers: [WordsController],
      providers: [WordsService, DomainService, DbService],
    }).compile();

    controller = module.get<WordsController>(WordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should process words correctly', async () => {
    await controller.create({ url: 'http://norvig.com/big.txt' });

    expect(await controller.findOne('quality')).toBe(19);
  });
});
