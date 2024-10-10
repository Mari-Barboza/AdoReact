// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css'; // Importa o CSS

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/produtos');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        setProdutos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) return <div>Carregando produtos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="home">
      <nav>
        <h1>Mari Restaurante</h1>
      </nav>
      <div className="container">
        <h2>Menu</h2>
        <div className="produtos">
          {produtos.map((produto) => (
            <div key={produto.id} className="card">
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>
              <p className="preco">Preço: R$ {produto.preco.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <p>&copy; 2024 Mari Restaurante. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
