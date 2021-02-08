import * as actionTypes from './action';

const initialState = {
   userName:null,
   formData:{}
};

const reducer =(state =initialState,action) => {
    
switch(action.type){
    case(actionTypes.LOGIN_ACTION):
        return  {
            ...state,
            userName:action.userName,
            formData:action.formData
            
        }
        case(actionTypes.PROFILE_UPDATE_ACTION):
        return  {
            ...state,
            formData:action.formData
            
        }
}

return state;
};




export default reducer;