import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cep from './components/Cep';
import Regioes from './components/Regioes';
import Nome from './components/Nome';
import Erro404 from './components/Erro404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/cep" exact={true} component={Cep} />
      <Route path="/regioes" exact={true} component={Regioes} />
      <Route path="/nome" exact={true} component={Nome} />
      <Route path='*' component={Erro404} />
    </Switch>
  </BrowserRouter>,
    
    document.getElementById('root')
);
