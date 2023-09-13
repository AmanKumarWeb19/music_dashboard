import axios from "axios"
import { LOGIN_DATA } from "./actionTypes"


const loginData=(payload)=>{
 return {type:LOGIN_DATA,payload}
}





export const Login=(email,password)=>(dispatch)=>{
   return  axios.post(`https://reqres.in/api/login`,{email,password})
     .then((res)=>{
        console.log(res.data.token)
        dispatch(loginData(res.data))
     }).catch(err=>console.log(err))
}