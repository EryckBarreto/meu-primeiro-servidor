const express = require('express');
const app = express();
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contagem = 0;

app.get('/', (requisicao, resposta) => {

    resposta.send(`É a vez de ${jogadores[contagem]} jogar!`);
    contagem++;

    if (contagem > jogadores.length - 1) {
        contagem = 0;
    }
});

app.listen(3000);
