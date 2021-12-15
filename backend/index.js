const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '..', '.env') });
const express = require('express');
const app = express();

const port = process.env.FORM_PORT || 3001;

app.use(express.json());

// Access the parse results as request.body
app.post('/form', function (request, response) {
  const { body } = request;
  console.log(body);
  // Store data in no-SQL db...
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
