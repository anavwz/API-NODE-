///Importação a partir de CommonJS:                                                                                                                        cls
///var express = require("express");

import express from "express";

const app = express(); ///vai trazer o retorno da execução da função
const porta = 3000;

app.get("/",(request, response) => {
    response.send("Olá, mundo!")
});

app.get("/usuario", (request, response) => {
    response.json([
        {
        id: 1,
        nome: "Ana Vitória",
        profissao:"aluna de panquequinha de banãnã"
        },

        {
        id: 2,
        nome: "Paulo",
        profissao:"menino do i"
        },

        {
        id: 3,
        nome: "Larissa",
        profissao:"menina risonha"
        },

        {
        id: 4,
        nome: "Antônia",
        profissao:"Carolzinha Conká"
        },

    ]);
});

app.listen(porta, (resquest, response) => {
    console.log(`Servidor rodando: http://127.0.0.1:${porta}`)
});