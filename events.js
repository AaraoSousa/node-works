const  EventEmitter =  require('events');
const http = require('http');

class Sales extends EventEmitter     {
    constructor()   {
        super();
    }
}

const myEmitter =  new Sales();


myEmitter.on('newSale',() => {
    console.log('There was a new sale!');
});

myEmitter.on('newSale',() => {
    console.log('Costumer name: Aarão');
});

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} itens left in stock.`);
});
myEmitter.emit('newSale', 9);
 
/////////////////////////////////////////OUVIR DIFERENTER EVENTOS 

const server = http.createServer()

server.on('request', (req, res) => {
    console.log('request received');
    console.log(req.url);
    res.end('request received');
});

server.on('request', (req, res) => {
  console.log('Another request😊');
    
});
server.on('close', () => {
console.log('Server Closed');
});

server.listen(8000, '127.0.0.1', () =>{
 console.log("waiting for requests...");
});