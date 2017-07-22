import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '../components/Hello.jsx'
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Hello name="React" />
    </Provider>
    ,
    document.body.appendChild(document.createElement('div')),
  )
})
