import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ForgetPage  from './ForgetPage';
import LoginPage from './LoginPage';
import NewAccount from './NewAccount';
import NewPage from './NewPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='/' element= { < App />}/>
      <Route path='/Giriş Yap' element={<LoginPage/>}/> 
      <Route path='/Şifrenı mı unuttun?' element={<ForgetPage/>}/>
      <Route path='/Yeni hesap oluştur' element={<NewAccount/>}/>
      <Route path='/Sayfa oluştur' element={<NewPage/>}/>
    </Routes>
  </React.StrictMode>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
