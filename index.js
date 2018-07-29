// content of index.js
const http = require('http')
const port = 3112
const sleep = require('system-sleep');
const fs = require('fs');
const version = process.env.version;
const requestHandler = (request, response) => {
  console.log(request.url)

    if (fs.existsSync('/var/tmp/sleep')) {
        console.log('Found file');
        sleep(15000);
    }

  response.end('Hello Node.js test Server, version: ' + version );
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
})
