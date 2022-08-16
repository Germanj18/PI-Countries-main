import React from "react";
import style from "./Card.module.css";

export default function Card({name,continents,img}){
    return(
       
        <div className={style.card}>
            <img className={style.img} src={img} alt="not foud" width="200px" height="100px"/>
            <h5> {name}</h5>
            <h4>Continent: {continents}</h4>
        </div>
      
    )
}