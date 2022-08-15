const http = require('http'); //importando o HTTP
const app = require('./app');
const port = process.env.PORT || 3000; // Criando porta
const server = http.createServer(app); // Criandor o servidor
server.listen(port);//Escutando e iniciando serviço na porta
