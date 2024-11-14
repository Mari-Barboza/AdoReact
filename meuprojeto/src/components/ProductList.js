import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/produtos')  // Supondo que sua API esteja rodando em http://localhost:8080/produtos
            .then(response => response.json())
            .then(data => setProdutos(data))
            .catch(error => console.error('Erro ao carregar produtos:', error));
    }, []);

    return (
        <div className="product-list">
            {produtos.length > 0 ? (
                produtos.map(produto => <ProductCard key={produto.id} produto={produto} />)
            ) : (
                <p>Carregando produtos...</p>
            )}
        </div>
    );
};

export default ProductList;
