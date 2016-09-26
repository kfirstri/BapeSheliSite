var http = require('http');

var server = http.createServer((req, res) => {
	console.log('recieded httpt');
	return res.end('hello');
});

server.listen(process.env.PORT || 5000, () => {
	console.log('started');
})