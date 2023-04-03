import 'bootswatch/dist/lumen/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Landing from './components/Landing';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Landing />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='log-in' element={<LogIn />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
