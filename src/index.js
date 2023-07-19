const express = require('express');

const app = express();

app.get('/home', (requisicao, resposta) => {
    resposta.send("Olá... esse é o meu primeiro servidor com o express.");
});

app.listen(3000);