import React from 'react';
import ReactDOM from 'react-dom';
// import Main from './Components/Main';
import App from './Components/App';
import {BrowserRouter} from 'react-router-dom';
// import './styles/stylesheet.css';
import './main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));