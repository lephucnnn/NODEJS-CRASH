const http = require('http');
const fs = require('fs')


const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html');

    let fileName = '';
    switch(req.url) {
        case '/homepage':
            fileName = 'home.html';
            break;
        case '/about':
            fileName = 'about.html';
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            fileName = 'notFound.html'; 
    }

    const path = './views/' + fileName;

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return err;
        }

        res.end(data);
    })
})

server.listen(3000, () => {
    console.log('listening for requests on port 3000');
})
