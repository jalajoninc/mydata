var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
        if (req.method == 'POST') {
            console.log('Post');
            let chunks = []

            req.on('data', chunk => {
                chunks.push(chunk);
                console.log('A chunk of data has arrived: ', chunk);
            });
            
            req.on('end', () => {
                // var buf = new Buffer(chunks, 'base64');
                // var buf = Buffer.from(chunks);
                var buf = Buffer.from(chunks, 'base64') // New

                fs.writeFile('mynewfile3.png', buf, 'binary' , function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });
                console.log('No more data');
            })
        }

}).listen(8080);
