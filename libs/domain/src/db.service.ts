import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  private storage: Map<string, number> = new Map();
  storeWords(newWords: Map<string, number>): void {
    for (const [word, count] of newWords.entries()) {
      if (this.storage.has(word)) {
        this.storage.set(word, this.storage.get(word) + count);
      } else {
        this.storage.set(word, count);
      }
    }
  }

  getOne(word: string): number {
    return this.storage.get(word);
  }
}
