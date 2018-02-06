import React from 'react';

class AboutPage extends React.Component{
    render() {
        return(
            <div>
                <h1>About</h1>
                <p>
                    This application uses this technologies:
                    <ul>
                        <li>React</li>
                        <li>Flux</li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default AboutPage;