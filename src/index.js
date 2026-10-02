import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/SumarNumeros';
import SaludoPadre from './components/SaludoPadre';
import Matematicas from './components/Matematicas';
import PadreMatematicas from './components/PadreMatematicas';
import Contador from './components/Contador';
import Car from './components/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Car marca="Audi" modelo="Q8" velocidadMaxima="240" aceleracion="25"/>
    <Car marca="Pontiac" modelo="Firebird" velocidadMaxima="340" aceleracion="33"/>
    {/*<Contador/>
    <PadreMatematicas/>
    <SaludoPadre/>
    <SumarNumeros num1="7" num2="9"/>
    <SumarNumeros num1="777" num2="99"/>
    */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
