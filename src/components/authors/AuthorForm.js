import React from 'react';
import {Router} from 'react-router';
import Input from '../common/TextInput';

class AuthorForm extends React.Component{     
    render(){
        return (
            <form>
                <h1>Manage Author</h1>
                <Input 
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange} />
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        )
    }
};

export default AuthorForm;