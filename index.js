const express = require('express')
const path = require('path')
const favicon = require('express-favicon')

const app = express()
app.use(favicon(path.join(__dirname, 'favicon.ico')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
