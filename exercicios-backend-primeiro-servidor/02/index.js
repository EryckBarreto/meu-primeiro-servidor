const express = require('express');
const app = express();
let intervalo = null;
let minutos = 0;
let segundos = 0;

function contagemCronometro() {
    segundos++;
    if (segundos > 59) {
        minutos++;
        segundos = 0;
    };
};

app.get("/", (requisicao, resposta) => {
    resposta.send(`Tempo atual do cronônetro: ${minutos} minutos e ${segundos} segundos.`);
});

app.get("/iniciar", (requisicao, resposta) => {
    intervalo = setInterval(contagemCronometro, 1000);
    resposta.send("Cronômetro iniciado!")
});

app.get("/pausar", (requisicao, resposta) => {
    clearInterval(intervalo);
    resposta.send("Cronômetro pausado!");
});

app.get("/continuar", (requisicao, resposta) => {
    intervalo = setInterval(contagemCronometro, 1000);
    resposta.send("Cronômetro continuando!");
});

app.get("/zerar", (requisicao, resposta) => {
    segundos = 0;
    minutos = 0;
    resposta.send("Cronômetro zerado!");
});

app.listen(8000);
