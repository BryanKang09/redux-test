let initialState = {
    count: 0,
};

function reducer(state=initialState,action){
    console.log(action)
    if (action.type === "increment"){
        return {...state, count:state.count+1}
    
    // switch (action.type){
    //     case "increment":
    //         return (...state, count:state.count+1)
    //     default
    //         return (state);
    }
    return { ...state }
    }
    

export default reducer;