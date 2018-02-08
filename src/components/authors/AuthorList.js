import React from 'react';

class AuthorList extends React.Component{
    createAuthorRow (author) {
        return (
            <tr key={author.id}>
                <td>
                    <a href={"/#authors/" + author.id}>{author.id}</a>
                </td>
                <td>
                    {author.firstName} {author.lastName}
                </td>
            </tr>
        );
    };
    render() {
        return (
            <div>                
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(this.createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }             
}

export default AuthorList;