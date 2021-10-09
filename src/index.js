const express = require('express')
const port = 3001;
const app = express();

app.get('/', (req, res) => {
  res.send('This is swagger-jsdoc test')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})