const express = require('express')
const port = 3001;
const app = express();

/**
   * @swagger
   * /:
   *   get:
   *     description: Returns the homepage
   *     responses:
   *       200:
   *         description: swagger-jsdoc test
   */
app.get('/', (req, res) => {
  res.send('This is swagger-jsdoc test')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})