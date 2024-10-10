// backend/initDb.js
const sqlite3 = require('sqlite3').verbose();

// Conectar ou criar o banco de dados
let db = new sqlite3.Database('./database.db');

// Criar a tabela de produtos
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    descricao TEXT,
    preco REAL
  )`);

  // Inserir alguns produtos de exemplo
  db.run(`INSERT INTO produtos (nome, descricao, preco) VALUES
    ('Pizza de Mussarela', 'Pizza com muito queijo', 30.00),
    ('Hambúrguer Artesanal', 'Hambúrguer suculento', 25.00),
    ('Lasanha Bolonhesa', 'Lasanha tradicional com molho bolonhesa', 40.00),
    ('Salada Caesar', 'Salada Caesar com molho especial', 20.00)
  `);
});

db.close();
