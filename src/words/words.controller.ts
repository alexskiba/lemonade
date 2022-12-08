import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WordsService } from './words.service';
import { CreateWordDto } from './dto/create-word.dto';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post()
  async create(@Body() createWordDto: CreateWordDto): Promise<void> {
    await this.wordsService.create(createWordDto);
  }

  @Get(':word')
  findOne(@Param('word') word: string): number {
    return this.wordsService.findOne(word);
  }
}
