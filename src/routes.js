import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/about/AboutPage';
import AuthorPage from './components/authors/AuthorPage';


const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />        
        <Route path="/about" component={AboutPage} />
        <Route path="/authors" component={AuthorPage} />
    </Switch>
);

export default Main;
