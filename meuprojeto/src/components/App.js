import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductList from './ProductList';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="content">
                <h1>Bem-vindo ao Adoreact!!!</h1>
                <ProductList />
            </div>
            <Footer />
        </div>
    );
};

export default App;
