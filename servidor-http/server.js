const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// GET com query
app.get('/rota', (req, res) => {
    const nome = req.query.nome;

    res.json({
        mensagem: `Olá, ${nome}! (GET)`
    });
});

// POST com body
app.post('/rota', (req, res) => {
    const nome = req.body.nome;

    res.json({
        mensagem: `Olá, ${nome}! (POST)`
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});