const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  //   console.log(url, method);
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button> </form></body>'
    );
    res.write('</html>');
    return res.end();
  } else if (url === '/message' && method === 'POST') {
    // fs.writeFileSync("message.txt", "DUMMY");
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  //   console.log(req.url, req.method, req.headers);

  //   process.exit();  //It will exit from the event loop and server stopped.
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello world</h1></body>');
  res.write('</html>');
  res.end();
  //   res.write('sfdsd');                //This line Doesn't work because response is closed/end i.e., res.end();
};

module.exports = requestHandler;
