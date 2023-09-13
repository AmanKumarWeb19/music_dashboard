import { LOGIN_DATA } from "./actionTypes"


const initialState={
            course:[],
            loading:false,
            error:false,
            token:""
        }

export const reducer=(state=initialState,action)=>{
 const {type,payload}=action
switch (type){
    case LOGIN_DATA :{
        return {
            ...state,token:payload
        }
    }
    default:
        return state
}

}