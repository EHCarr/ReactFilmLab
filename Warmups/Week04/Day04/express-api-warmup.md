# Express API

## Objectives

By the end of this, developers should be able to:

- Write CRUD endpoints for a library API resource using Express and Javascript.



## Preparation

1. create a new project with 

```
npm init
```

2. install express
```
npm i express
```

3. create a server file and change main in package.json to server.js
```
touch server.js
```

```

const express = require('express');

const app = express();

// insert your data below this line!

// insert your route handlers (app.get and so on) below this line!

const port = 4000;

app.listen (port, () => {
    console.log(`Express-API-Warmup is running on port ${port}`);
})

```

use this as base for your library appliation
```
const books = [
  { title: 'Dictionary', author: 'Webster' }, // 0
  { title: 'Encyclopedia', author: 'Encarta' }, // 1
  { title: 'Clean Code', author: 'Robert Cecil Martin' } // 2
]

```





Most apps need to do a bit more than always sending back "Hello world". To get
some more exposure to Express, build out a minimal API in
that that we can
use to store books for a library.

Our app will have these routes available:

- `GET /books`: respond with JSON of all books.
- `GET /books/:id`: respond with JSON of one book.

BONUS:
- `POST /book` : creates a new book and responds with a JSON of all books.
