import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';
import { DbService } from '@app/domain/db.service';
import { DomainModule, DomainService } from '@app/domain';

@Module({
  imports: [DomainModule],
  controllers: [WordsController],
  providers: [WordsService, DomainService, DbService],
})
export class WordsModule {}
