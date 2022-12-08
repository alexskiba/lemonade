import { Injectable } from '@nestjs/common';
import { promisify } from 'node:util';
import { pipeline, Writable } from 'node:stream';
import fetch from 'node-fetch';

@Injectable()
export class DomainService {
  parseWords(text: string): Map<string, number> {
    const wordsCounter = new Map<string, number>();
    text
      // regex to remove all non-letter characters
      .toLowerCase()
      .replace(/[^A-Za-z]/g, ' ')
      .split(' ')
      .filter((word) => word !== '')
      .forEach((word) => {
        if (wordsCounter.has(word)) {
          wordsCounter.set(word, wordsCounter.get(word) + 1);
        } else {
          wordsCounter.set(word, 1);
        }
      });

    return wordsCounter;
  }

  async downloadText(url: string, saver: Writable): Promise<void> {
    const streamPipeline = promisify(pipeline);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`unexpected response ${response.statusText}`);
    }

    await streamPipeline(response.body, saver);
  }
}
