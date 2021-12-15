const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Access the parse results as request.body
app.post('/form', function (request, response) {
  const { body } = request;
  console.log(body);
  // Store data in no-SQL db
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
