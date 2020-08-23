var http = require('http');

var ohello = {
first: "John",
    last : "Doe",
    id   : 5566,
    showit : function( res ) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>');
        res.write('Hello, World!');
        res.write('<br>');
        res.write(ohello.first);
        res.write('</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
};

http.createServer(function (req, res) {
                  ohello.showit( res );
                  
//            res.writeHead(200, {'Content-Type': 'text/html'});
//            res.write('<html>');
//            res.write('<body>');
//            res.write('<h1>Hello, World!</h1>');
//            res.write('</body>');
//            res.write('</html>');
//            res.end();
}).listen(8080);
