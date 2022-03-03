const express = require('express');
const http = require('http');
const bcrypt = require('bcrypt');
const path = require("path");
const bodyParser = require('body-parser');
const users = require('./model/dados').userDB;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/view')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/principal.html'));
});

app.post('/login', async(req, res) => {
    try {
        let foundUser = users.find((data) => req.body.email === data.email);
        if (!foundUser) {
            let hashPassword = await bcrypt.hash(req.body.senha, 10);

            let newUser = {
                id: Date.now(),
                usuario: req.body.usuario,
                email: req.body.email,
                senha: hashPassword,
            };
            users.push(newUser);
            console.log('User list', users);
            res.send("<div align ='center'><h2>Cadastro realizado com sucesso</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./cadastro.html'>Cadastrar outro usuário</a></div>");
        } else {
            res.send("<div align ='center'><h2>E-mail já utilizado</h2></div><br><br><div align='center'><a href='./cadastro.html'>Cadastre-se novamente</a></div>");
        }
    } catch {
        res.send("Erro no servidor interno");
    }
});

app.post('/register', async(req, res) => {
    try {
        let foundUser = users.find((data) => req.body.email === data.email);
        let newUser = {
            id: Date.now(),
            usuario: req.body.usuario,
            email: req.body.email,
            senha: req.body.senha,
            nomeCompleto: req.body.nomeCompleto
        };
        users.push(newUser);
        console.log('User list', users);
        if (foundUser) {

            let submittedPass = req.body.senha;
            let storedPass = foundUser.senha;
            
            const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
            if (passwordMatch) {
                let usrname = foundUser.usuario;
                res.send(`<div align ='center'><h2>Login com sucesso</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href='login.html'>logout</a></div>`);
            } else {
                res.send("<div align ='center'><h2>Senha ou e-mail inválidos</h2></div><br><br><div align ='center'><a href='login.html'>login again</a></div>");
            }
        } else {
            let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
            await bcrypt.compare(req.body.senha, fakePass);

            res.send("<div align ='center'><h2>Senha ou e-mail inválidos</h2></div><br><br><div align='center'><a href='login.html'>Faça o login novamente<a><div>");
        }
    } catch {
        res.send("Erro o servidor interno");
    }
});


server.listen(3000, function() {
    console.log("Servidor ouvindo na porta 3000");
});