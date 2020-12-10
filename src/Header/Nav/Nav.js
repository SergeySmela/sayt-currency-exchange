import React, { Component } from 'react';

import './Nav.css';

class Nav extends Component {
    state = {
        
    }

    render() {
        return (
            <div className="Nav">
                <div className="header-nav">
                        <div className="container">
                            <nav>
                                <ul>
                                    <li><a href="/">Главная</a></li>
                                    <li><a href="/point">Пункты обмена</a></li>
                                    <li><a href="/about">Контакты</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Nav;
