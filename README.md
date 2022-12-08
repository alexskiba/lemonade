## Description

An API to count words. Implemented using [Nest](https://github.com/nestjs/nest).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API

Add text to extract and count words:
```bash
curl -X POST http://localhost:3000/words -H 'Content-Type: application/json' -d '{"url": "http://norvig.com/big.txt"}'
```
or Windows:
```bash
curl -X POST http://localhost:3000/words -H "Content-Type: application/json" -d "{\"url\": \"http://norvig.com/big.txt\"}"
```

Get count for a specific word:
```bash
curl http://localhost:3000/words/the
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
