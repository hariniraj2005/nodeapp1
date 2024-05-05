const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/home') {
       res.setHeader('Content-Type','text/html');
       res.write('<html>');
       res.write('<head>');
       res.write('<title>Welcome</title>');
       res.write('</head>');
       res.write('<body>');
       res.write('<h1> Welcome home</h1>');
       res.write('</body>');
       res.write('</html>');
        res.end();
    } else if (req.url === '/about') {
        res.setHeader('Content-Type','text/html');
       res.write('<html>');
       res.write('<head>');
       res.write('<title>About us</title>');
       res.write('</head>');
       res.write('<body>');
       res.write('<h1> Welcome to About Us page</h1>');
        res.write('</body>');
       res.write('</html>');
        res.end();
    } else if(req.url === '/node') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
       res.write('<head>');
       res.write('<title>nodejs</title>');
       res.write('</head>');
       res.write('<body>');
       res.write('<h1>Welcome to my Node Js project</h1>');
       res.write('</body>');
       res.write('</html>');
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Page not found');
        res.end();
    }

});
server.listen(3000);