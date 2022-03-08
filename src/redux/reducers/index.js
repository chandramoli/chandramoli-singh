
import { API_REQUEST_INIT, API_REQUEST_SUCCESS, API_REQUEST_FAILED } from '../actions'
import initData from '../initials'

const reducer = (state = initData,{type,payload})=>{
    switch (type) {
        case API_REQUEST_INIT:
            return{...state,loading:true}
            
        case API_REQUEST_SUCCESS:
            return{...state,loading:false,data:payload,error:''} 
            
        case API_REQUEST_FAILED:
            return{...state,loading:false,error:payload}
        default :return state
    }
}


export default reducer