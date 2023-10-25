import express from 'express'
const app = express()
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, '/dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
})

var server = app.listen(process.env.PORT || 9090, function () {
  var host = server.address().address
  var port = server.address().port
  console.info(`server start successfully on http://${host}:${port}`)
})
