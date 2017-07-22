import React from 'react'
import ReactDOM from 'react-dom'
import HelloApp from '../containers/HelloApp.js'
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <HelloApp />
    </Provider>
    ,
    document.body.appendChild(document.createElement('div')),
  )
})
