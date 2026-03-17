///Importação a partir de CommonJS:                                                                                                                        cls
///var express = require("express");

import express from "express";

const app = express(); ///vai trazer o retorno da execução da função
const porta = 3000;

app.get("/",(request, response) => {
    response.send("Olá, eu vou tirar mb nessa matéria!")
});

app.listen(porta, (resquest, response) => {
    console.log(`Servidor rodando: http://127.0.0.1:${porta}`)
});