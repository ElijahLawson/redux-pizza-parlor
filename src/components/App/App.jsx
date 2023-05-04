import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    getPizzas()
  }, [])

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
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
