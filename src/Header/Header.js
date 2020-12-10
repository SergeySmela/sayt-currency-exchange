import React, { Component } from 'react';

import './Header.css';
import Nav from './Nav/Nav';

class Header extends Component {
    state = {

    }

    render() {
        return (
            <div className="Header">
                <header>
                    <div className="top-bar animate-dropdown"></div>
                    <div className="main-header">
                        <div className="container">
                            <h1 className="site-title">React Lite Level</h1>

                        </div>
                    </div>
                    <Nav/>
                </header>

            </div>
        );
    }
}

export default Header;
