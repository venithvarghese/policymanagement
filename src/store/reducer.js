import * as actionTypes from './action';


const initialState = {
   userName:null,
    userId:null
};

const reducer =(state =initialState,action) => {
    
switch(action.type){
    case(actionTypes.LOGIN_ACTION):
        return  {
            ...state,
            userName:action.userName,
            userId:action.userId
            
        }
}

return state;
};




export default reducer;