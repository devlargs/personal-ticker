export default function(state=[{name: 'Ralph'}], action){
    switch(action.type){
        case "USER_SELECTED": 
            console.log(action)
            return state.concat({name: 'Louise'});
        break;
    };
    return state;
}