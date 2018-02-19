import React from 'react';
import Header from './common/Header';
import Main from '../routes';

class App extends React.Component{
    render(){    
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;