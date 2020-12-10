import React, { Component } from 'react';

import './Point.css';

class Point extends Component {
    state = {
        
    }

    render() {
        return (
            <div className="Point">
                <div class="contacts__list">
                    <div class="contacts__row">
                        <div class="contacts__row-address">
                            <p>пр. Д. Яворницкого, 000 <br/><small>Вокзальная</small></p>
                            <a href="#!" class="contacts__row-map"><i class="icon-marker"></i><span>На карте</span></a>
                            </div>
                            <div class="contacts__row-phones">
                                <div>
                                    <a href="tel:">0 (800) 123 456<br/>Звонки по Украине бесплатные!</a><br/></div></div>
                                <div class="contacts__row-schedule">
                                    <p class="break-newline">Пн-Пт 09:00-19:00
                                        Сб-Вс 10:00-19:00</p>
                                </div>
                            </div>
                        </div>
            </div>
        );
    }
}

export default Point;
