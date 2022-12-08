import { DomainModule, DomainService } from '@app/domain';
import { DbService } from '@app/domain/db.service';
import { Test, TestingModule } from '@nestjs/testing';
import { WordsService } from './words.service';

describe('WordsService', () => {
  let service: WordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DomainModule],
      providers: [WordsService, DomainService, DbService],
    }).compile();

    service = module.get<WordsService>(WordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
