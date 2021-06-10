import React from 'react';

const Header: React.FC = () => {

    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="logo">
                        <a href="/">
                           <span>Todo App</span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};
export default Header
