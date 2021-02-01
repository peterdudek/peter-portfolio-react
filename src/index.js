import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TypedReactDemo from "./components/Typed";

ReactDOM.render(
  <React.StrictMode>
    <>
    {/* <TypedReactDemo
    strings={[
    	'Some <i>strings</i> are slanted',
      'Some <strong>strings</strong> are bold',
      'HTML characters &times; &copy;'
    ]}
  />, */}
    <App />
  </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
