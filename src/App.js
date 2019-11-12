import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import List from './Components/List/List';
import Details from './Components/Details/Details';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './Components/Preloader/Preloader.css';
import './Components/List/List.css'
import './Components/Error/Error.css'
import './Components/Details/Details.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path='/' component={List} />
          <Route exact path='/:id/details' component={Details} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
