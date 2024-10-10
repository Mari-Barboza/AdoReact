// backend/server.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 5000;

// Permitir requests de outros domínios (neste caso, o React no localhost:3000)
app.use(cors());

// Permitir o uso de JSON nas requisições
app.use(express.json());

// Conectar ao banco de dados
const db = new sqlite3.Database('./database.db');

// Endpoint para listar todos os produtos
app.get('/api/produtos', (req, res) => {
  db.all('SELECT * FROM produtos', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
