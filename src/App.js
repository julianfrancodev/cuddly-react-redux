import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import ProductEdit from './components/ProductEdit';
import Products from './components/Products';
import ProductsNew from './components/ProductsNew';

function App() {
  return (

    <Router>
      <Header />
      <div className="container">


        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/products/new' component={ProductsNew}/>
          <Route exact path='/products/edit/:id' component={ProductEdit}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
