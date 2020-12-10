import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Rate from '../Rate/Rate';
import About from '../About/About';
import Point from '../Point/Point';
import Error_Page from '../Error_page/Error_page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    return (
      <div className="site">
       <Header/> 

        <div className="container">
          <main>
            <Switch>
              <Route exact path="/" component={Rate}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/point" component={Point}/>
              <Route component={Error_Page}/>

            </Switch>
            
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В
                частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего
                местоположения.&nbsp;<button className="btn btn-primary btn-sm">OK</button>
            </div>
          </div>
        </div>

      <Footer/>
      </div>
);
}
}

export default App;
