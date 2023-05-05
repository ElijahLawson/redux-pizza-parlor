import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import OrderPage from '../OrderPage/OrderPage';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Checkout from './Checkout/Checkout';

function App() {

  useEffect(() => {
    getPizzas()
  }, [])

  // total price for the cart
  const cart = useSelector(store => store.cart);

  const totalPrice = () => {
    let total = 0;
    for (let item of cart) {
      total += Number(item.price);
    }
    console.log("Total Price:", total)
    return total;
  }

  //Redux Dispatcher
  const dispatch = useDispatch();

  //Redux Global State
  const pizzas = useSelector(store => store.pizzas);

  //Axios GET request to /api/pizzas for pizza data from database
  const getPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then(response => {
      dispatch({
        type: 'SET_PIZZAS',
        payload: response.data
      })
    }).catch(error => {
        console.log('The axios get request to /api/pizza failed :(')
    })
  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        <h3 className='text-black text-right text-3xl'>🛒: ${totalPrice()}</h3>
      </header>
      <Router>
      <nav>
          <h2 className='text-2xl font-bold'>Welcome!</h2>
          <ul>
            <li className='underline'><Link to="/">Order now!!!</Link></li>
            <li className='underline'><Link to="/customerInfo">customer info</Link></li>
            <li className='underline'><Link to="/checkout">Checkout</Link></li>
          </ul>
        </nav>
  
      {/* <img src='images/pizza_photo.png' /> */}
      <h2 className='text-2xl font-bold'>Pizza is great.</h2>

    <Route  exact path='/'>
      <OrderPage />
      <button><Link to="/customerInfo">NEXT</Link></button>
    </Route>

    <Route exact path='/customerInfo'>
      <CustomerInfo />
      <button><Link to="/checkout">NEXT</Link></button>
    </Route>
    
    <Route exact path='/checkout'>
      <Checkout /> 
    </Route>
    
    </Router>
    </div>
  );
}

export default App;
