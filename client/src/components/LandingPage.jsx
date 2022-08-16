import React from "react";
import  {Link} from "react-router-dom";
import style from "./LandingPage.module.css";


export default function LandingPage(){
    return (
        <div className={style.fondo}>
            <div className={style.div}><h1>welcome to countries</h1></div>
            <div><Link to ='/home'>
                 <button className={style.boton}>Ingresar</button>
             </Link></div>
             
        </div>
    )
}