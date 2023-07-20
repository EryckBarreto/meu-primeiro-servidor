const express = require('express');

const app = express();

app.get('/home', (requisicao, resposta) => {
    resposta.send("Olá... esse é o meu primeiro servidor com o express.");
});

app.get('/array', (requisicao, resposta) => {
    const array = [1, 2, 3, 4, 5, 6];
    resposta.send(array);
});

app.listen(3000);