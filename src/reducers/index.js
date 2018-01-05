import { combineReducers } from 'redux';

import users from './users'

const allReducers = combineReducers({
    users: users
});

export default allReducers;