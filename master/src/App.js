import React, { Component, Fragment } from 'react';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"
import {
  Switch,
  Route
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';
import CheckOut from './pages/Checkout/Checkout';

class App extends Component {

 

 render(){
  let routes = (
    <Switch>
      <Route path="/blog" component={Blog}/>
      <Route path="/products/:slug" component={Detail}/>
      <Route path="/products" component={Products}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/checkout" component={CheckOut}/>
      <Route path="/" exact component={Home}/>
    </Switch>
  )
  return (
    <Fragment>
      <Layout>
        {routes}
      </Layout>
    </Fragment>
  );
 }
}

export default App;
