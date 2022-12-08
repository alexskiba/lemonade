import { Test, TestingModule } from '@nestjs/testing';
import { DomainService } from './domain.service';

describe('DomainService', () => {
  let service: DomainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomainService],
    }).compile();

    service = module.get<DomainService>(DomainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should parse words correctly', () => {
    expect(service.parseWords('test test text')).toEqual(
      new Map([
        ['test', 2],
        ['text', 1],
      ]),
    );
  });

  it('should parse words correctly', () => {
    expect(service.parseWords('test3 test-text')).toEqual(
      new Map([
        ['test', 2],
        ['text', 1],
      ]),
    );
    expect(service.parseWords('test_test_text')).toEqual(
      new Map([
        ['test', 2],
        ['text', 1],
      ]),
    );
    expect(service.parseWords('test/test\ttext')).toEqual(
      new Map([
        ['test', 2],
        ['text', 1],
      ]),
    );
    expect(service.parseWords('test/test\\text')).toEqual(
      new Map([
        ['test', 2],
        ['text', 1],
      ]),
    );
  });
});
