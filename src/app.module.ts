import { DomainModule } from '@app/domain';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordsModule } from './words/words.module';

@Module({
  imports: [WordsModule, DomainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
