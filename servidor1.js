const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'view')));
app.set('views', path.join(__dirname, 'view'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('principal.html');
});

var msg_salvas = [];

io.on('connection', socket => {
    console.log(`Usuario conectado:  ${socket.id}`);

    socket.emit('mensagensAnteriores', msg_salvas);

    socket.on('requisicao', dados => {
        msg_salvas.push(dados);
        socket.broadcast.emit('mensagensTransmitidas', dados)
    })
});

server.listen(3000);
console.log('Servidor ouvindo na porta 3000...');