
const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const port = 3000;

app.get('/somar/:a/:b', (req, res) => {
  const resultado = calculadora.somar(Number(req.params.a), Number(req.params.b));
  res.send(`Resultado da soma: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
  const resultado = calculadora.subtrair(Number(req.params.a), Number(req.params.b));
  res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const resultado = calculadora.multiplicar(Number(req.params.a), Number(req.params.b));
  res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
  const resultado = calculadora.dividir(Number(req.params.a), Number(req.params.b));
  res.send(`Resultado da divisão: ${resultado}`);
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
