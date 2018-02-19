import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/about/AboutPage';
import AuthorPage from './components/authors/AuthorPage';
import ManageAuthorPage from './components/authors/ManageAuthorPage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />        
        <Route path="/about" component={AboutPage} />
        <Route path="/authors" component={AuthorPage} />
        <Route path="/author" name="addAuthor" component={ManageAuthorPage}/>
    </Switch>
);

export default Main;
