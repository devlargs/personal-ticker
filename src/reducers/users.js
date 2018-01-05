export default function(state=[{name: 'Ralph'}], action){
    switch(action.type){
        case "USER_SELECTED": 
            return state.concat({name: 'Rayleigh'});
        break;
    };
    return state;
}