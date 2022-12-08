import { DomainService } from '@app/domain';
import { DbService } from '@app/domain/db.service';
import { Injectable } from '@nestjs/common';
import { Stream } from 'stream';
import { CreateWordDto } from './dto/create-word.dto';

@Injectable()
export class WordsService {
  constructor(
    private readonly domainService: DomainService,
    private readonly dbService: DbService,
  ) {}

  async create(createWordDto: CreateWordDto): Promise<void> {
    const domainService = this.domainService;
    const dbService = this.dbService;

    const streamParser = new Stream.Writable({
      write: function (chunk, encoding, next) {
        const words = domainService.parseWords(chunk.toString());
        dbService.storeWords(words);
        next();
      },
    });

    await this.domainService.downloadText(createWordDto.url, streamParser);
  }

  findOne(word: string) {
    return this.dbService.getOne(word);
  }
}
