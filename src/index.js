import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom'; 
import * as serviceWorker from './serviceWorker';

import Home from "./views/Home";

const routes = (
  <Router>
    <Route exact path="/" component={Home}/>
  </Router>
);

ReactDOM.render( routes, document.getElementById('root'));
serviceWorker.unregister();
