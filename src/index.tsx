import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import MonitorMain from './MonitorMain'
import reportWebVitals from './reportWebVitals';
import 'bootswatch/dist/materia/bootstrap.min.css'

import TarjasMain from './TarjasMain'

ReactDOM.render(
  <React.StrictMode>
    <TarjasMain />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
