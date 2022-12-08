import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { DomainService } from './domain.service';

@Module({
  providers: [DomainService, DbService],
  exports: [DomainService, DbService],
})
export class DomainModule {}
