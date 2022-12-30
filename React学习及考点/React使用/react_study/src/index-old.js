import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// redux todoList例子
// import React from "react";
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

// import todoApp from './reduxUse/reducers'
// import App from './reduxUse/components/App'

// const store = createStore(todoApp)

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )