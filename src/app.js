import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import routes from './routes';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import App from './components/Main';
const $ = jQuery;

ReactDOM.render(
    (<BrowserRouter><App /></BrowserRouter>),
    document.getElementById('app')
);

//ReactDOM.render(<HomePage />, document.getElementById('app'));
