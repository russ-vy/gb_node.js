'use strict'

const port = process.env.PORT || 8080

const http = requiest('http')
const app = http.createServer((req, res) => {
    res.end(`App listening on ${port}!`)
})

app.listen(port, function () {
  console.log(`App listening on ${port}!`)
})