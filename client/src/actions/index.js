import axios from 'axios';
import { GET_COUNTRIES, FILTRADO_CONTINENTS, GET_ACTIVITY, BY_ACTIVITY, BY_ALFB, BY_POBLACION, GET_NAME_COUNTRIES, DETAIL_COUNTRIES,FAILURE, CLEAR} from './actionstypes';

export function getCountries(){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/countries",{});
        return dispatch({
            type: GET_COUNTRIES,
            payload:json.data
        })
    }
}

export function filterContinents(payload){
        return {
            type: FILTRADO_CONTINENTS,
            payload
        }
    }

export function getActivitiy(){
        return async function(dispatch){
            var json = await axios.get("http://localhost:3001/activities",{});
            return dispatch({
                type: GET_ACTIVITY,
                payload:json.data
            })
    }
}
    
export function BYACTIVITY(payload){
    return{
        type: BY_ACTIVITY,
        payload
    }
}
export function BYALFB(payload){
    return{
        type:BY_ALFB,
        payload
    }
}
export function BYPOBLACION(payload){
    return{
        type:BY_POBLACION,
        payload
    }
}
export function getBYNAME(payload){
    return async function(dispatch)
{
    try {
        var json = await axios.get(`http://localhost:3001/countries?name=${payload}`)
        return dispatch({
            type: GET_NAME_COUNTRIES,
            payload:json.data
        })
    } catch (error) {
        return dispatch({
            type: FAILURE,
            
        })
    
        
    }
}

}
export function postActivity(payload){
    return async function(){
        var json = await axios.post("http://localhost:3001/activities",payload);
        return json;
    }
}
export function getdetail(payload){
    return async function (dispatch){
        try {
            var json= await axios.get("http://localhost:3001/countries/"+payload);
            return dispatch({
                type: DETAIL_COUNTRIES,
                payload:json.data
            })
        } catch (error) {
            return dispatch({
                type: FAILURE,
                
            })
        }
    }
}
export function clear(){
    
    return{
        type: CLEAR,
    }
}

