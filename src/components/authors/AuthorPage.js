import React from 'react';
import {Link, Router} from 'react-router-dom';
import AuthorApi from '../../api/authorApi';
import AuthorList from './AuthorList';

class AuthorPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            authors:[]
        };
    }

    componentDidMount() {        
        this.setState({authors: AuthorApi.getAllAuthors()});        
    };

    render(){
        return(
            <div>
                <h1>Authors</h1>
                <Link to="Author" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />                        
            </div>
        );        
    }
}

export default AuthorPage;