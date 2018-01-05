import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

import { selectUser, addUser } from '../actions';

class UserList extends Component {
    render(){
        return (
            <ul>
                {
                    this.props.users.map((key, idx) => {
                        return <li key={idx} onClick={() => this.props.selectUser(key)}>{key.name}</li>
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);