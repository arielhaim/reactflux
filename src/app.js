import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/about/AboutPage';
import AuthorPage from './components/authors/AuthorPage';
import Header from './components/common/Header';

class App extends React.Component{
    render(){
        let Child;
        switch (this.props.route){
            case 'about':
                Child = AboutPage;break;
            case 'authors':
                Child = AuthorPage;break;
            default:
                Child = HomePage;break;
        }
        return (
            <div>
                <Header />
                <Child />
            </div>
        );
    }
}
const render = () =>{
    let route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route}/>, document.getElementById('app'));
}
window.addEventListener('hashchange', render);
render();
//ReactDOM.render(<HomePage />, document.getElementById('app'));
