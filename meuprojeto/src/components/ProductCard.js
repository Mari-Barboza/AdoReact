import React from 'react';

const ProductCard = ({ produto }) => {
    return (
        <div className="product-card">
            <h3>{produto.produto}</h3>
            <p>{produto.descricao}</p>
            <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;
