var http = require('http');

var server = http.createServer((req, res) => {
	console.log('recieded httpt');
	return res.end('hello');
});

server.listen(8080, () => {
	console.log('started');
})