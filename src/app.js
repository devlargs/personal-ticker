import React, { Component } from 'react';

//components
import UserList from './components/userList';

class App extends Component {
    render(){
        return(
            <div>
                <h1>Users</h1>
                <UserList />
            </div>
        )
    }
}

export default App;