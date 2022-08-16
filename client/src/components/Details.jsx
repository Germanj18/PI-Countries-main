import React, { useEffect }from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getdetail, clear } from "../actions";
import style from  "./Details.module.css";


function Detail(props){
   const {id}= useParams()
    const dispatch=useDispatch()
   const Country= useSelector((state)=>state.detail)
    useEffect(()=>{
        dispatch(getdetail(id));

        return ()=>{
            dispatch(clear());
        }
    },[dispatch, id])

    const activities = Country.activities?.map(e => {
        return {
            name: e.name,
            difficulty: e.difficulty,
            duration: e.duration,
            season: e.season
        }
    })

return ( 
    <div className={style.country}>
            <div >
                <img src={Country.img}  alt="not foud" width="200px" height="150px"/>
                <h4>ID: {Country.id}</h4>
                <h4> NAME:{Country.name}</h4>
               <h4>CONTINENT: {Country.continents}</h4>
               <h4>CAPITAL: {Country.capital}</h4>
                <h4> SUBREGION: {Country.subregion}</h4>
               <h4>AREA: {Country.area} km2</h4>
               <h4> POBLATION: {Country.poblacion}</h4>
            </div>
            <br />
            <div >
            <br />
            <h3>Activities</h3>
        {activities?.length > 0 ? activities?.map(e => {
            return (
                 <div className={style.actividad} key={e.id}>
                    <h5>Name: {e.name}</h5>
                    <h5>Difficulty: {e.difficulty}</h5>
                    <h5>Duration: {e.duration}h</h5>
                    <h5>Season: {e.season}</h5>
                                              
                  </div>
                                           
                 ) 
             })
             : <span className={style.sin}>Without activities</span>}
            </div>
            
     <div>
     <Link to= '/home'><button>Volver</button></Link>
     </div>
    
    </div>
)



}

export default Detail;

