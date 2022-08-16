import React from "react";
import {useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { getBYNAME } from "../actions";
import style from "./SerchBar.module.css";

export default function SearchBar (){
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()
    const [name,setName]= useState("")
    
    function handlechange(e){

        e.preventDefault()
        setName(e.target.value)
        
         


    }
    function handlesubmit(e){

        e.preventDefault()
        
        if(name===""){
            return alert("ingrese un pais")
        }if(error === ""){
        return alert("no existe el pais")
        }else{
             dispatch(getBYNAME(name))
        }
    
       
       
        
       
        

    }


return(

        <div  >
            <input 
            type='text'
            placeholder="Buscar countries..."
            onChange={(e)=>handlechange(e)}
            className={style.search}
           
            />
             <button className={style.btn} type="submit" onClick={(e)=>handlesubmit(e)}>Buscar</button>
             
        </div>
    )







    

}