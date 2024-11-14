import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Adoreact</h2>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/produtos">Produtos</a></li>
                <li><a href="/sobre">Sobre</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
