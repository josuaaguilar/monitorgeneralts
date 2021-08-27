import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react'
import reportWebVitals from './reportWebVitals';
import 'bootswatch/dist/materia/bootstrap.min.css'
import RolesMain from './RolesMain'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-dpcvu51y.us.auth0.com"
      clientId="pcNcf2JrfWuRLhy3QfavulSNfTsEbqrJ"
      redirectUri={window.location.origin}
      audience="https://monitorgeneral/api"      
    >
      <RolesMain />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//import RolesProvider from './RolesProvider'
//import TarjasMain from './TarjasMain'
//import App from './App';
//import MonitorMain from './MonitorMain'

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
