import React from 'react';
import AuthorForm from './AuthorForm';
import AuthorApi from '../../api/authorApi';

export default class ManageAuthorPage extends React.Component{
    constructor(props){
        super(props);

        this.state={    
            author: {id:'', firstName:'', lastName: ''}
        };

        this.setAuthorState = this.setAuthorState.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);
    }                
    

    setAuthorState(event){
        let field = event.target.name;
        let value = event.target.value;
                
        this.state.author[field] = value;        
        return this.setState({author: this.state.author});
    };

    saveAuthor(event){
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        console.log(this);
        this.props.history.push("Authors");
    };
    render(){
        return(            
            <AuthorForm 
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
            />
        )
    };
}
