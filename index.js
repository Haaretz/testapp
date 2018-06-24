// content of index.js
const http = require('http')
const port = 3112
const sleep = require('system-sleep');
const fs = require('fs');

const requestHandler = (request, response) => {
  console.log(request.url)

    if (fs.existsSync('/var/tmp/sleep')) {
        console.log('Found file');
        sleep(15000);
    }
  response.end('Hello Node.js test Server 123')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
