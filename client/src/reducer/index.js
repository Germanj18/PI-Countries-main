
import { GET_COUNTRIES, FILTRADO_CONTINENTS, GET_ACTIVITY, BY_ACTIVITY, BY_ALFB, BY_POBLACION, GET_NAME_COUNTRIES, POST_ACTIVITY, DETAIL_COUNTRIES,FAILURE, CLEAR, } from "../actions/actionstypes";
 
 
 const initialState={
     countries:[],
     continents:[],
     activity:[],
     allActivities:[],
     poblacion:[],
     detail:{},
     error: ""
 }



function rootReducer(state=initialState,{type,payload}){
    switch(type){
        case GET_COUNTRIES:
            return{
                ...state,
                countries:payload,
                continents:payload,
                allActivities:payload,
                poblacion:payload,
                
            }


        case FILTRADO_CONTINENTS:
            const allcontinents= state.continents;
            const filterContinente= payload==='All'? allcontinents: allcontinents.filter(e=>e.continents===payload)
            return {
                ...state,
                countries:filterContinente
           
            }

        case GET_ACTIVITY:
            return {
                ...state,
                activity:payload
            }
           
            case BY_ACTIVITY:
                const allActivities = state.allActivities;
                const activityFilter = payload === 'all' ? allActivities:
                    allActivities.filter(c => c.activities.find((element) => element.name.toLowerCase() === payload))
                return {
                    ...state,
                    countries: activityFilter
                }

            case BY_ALFB:
                    const order = payload === 'Asc' ?
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0;
                }) :
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                countries: order
            }

        case BY_POBLACION:
            const orderPopulation = payload === 'Min' ?
            state.countries.sort(function (a, b) {
                if (a.poblacion > b.poblacion) {
                    return 1;
                }
                if (b.poblacion > a.poblacion) {
                    return -1;
                }
                return 0;
            }) :
            state.countries.sort(function (a, b) {
                if (a.poblacion > b.poblacion) {
                    return -1;
                }
                if (b.poblacion > a.poblacion) {
                    return 1;
                }
                return 0;
            })
        return {
            ...state,
            countries: orderPopulation
        }
        
    case GET_NAME_COUNTRIES:
        return {
            ...state,
            countries: payload,
            error: ""

        }
        case POST_ACTIVITY:
            return{
                ...state
            }
        case DETAIL_COUNTRIES:
                return{
                    ...state,
                    detail:payload
                }
        case FAILURE:
                    return {
                        ...state,
                        error: payload
                    }


        case CLEAR:
              
           return{
               ...state,
               detail: {}
           }
      
            
            default:
                return state;
        
         
    }
        



}

export default rootReducer;