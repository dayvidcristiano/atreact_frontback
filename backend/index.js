const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());

app.get('/mensagem', (req, res) => {
    console.log("Requisição recebida em /mensagem");
    res.send('Olá! Esta resposta veio do servidor Node.js.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
