import React,{useState,useEffect} from "react";
import { Link} from "react-router-dom";
import { postActivity,  BYACTIVITY,getCountries} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import  style from "./CreateActivity.module.css";
 function CreateAtivity(){
    const dispatch= useDispatch()
    
    const season = ['Winter', 'Spring', 'Autumn', 'Summer'];
    
    const countries= useSelector((state)=>state.countries)
    const [errors, setErrors] = useState({
        name:"",
        difficulty:"",
        season:"",
        duration:"",
        countries:"",
    })

    function valida(input) {
        const errors = {}
        
        if (/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i.test(input.name)!==true  || !input.name  || input.name === "" || input.name.length === 0  || /^\s+$/.test(input.name) || !isNaN(input.name) ) {
          
         errors.name = "Requiere un nombre de actividad";
        }
       
        if(isNaN(input.duration)||!input.duration  || input.duration === "" || /^\s+$/.test(input.duration) || input.duration.length === 0 || input.duration > 24 ){
            errors.duration='introducir hora entre 1 o 24'
        }
     
  
        

        return errors;
    }

    const [input,setInput] = useState({
        name:"",
        difficulty:"",
        season:"",
        duration:"",
        countries:[],


    })
    useEffect(()=>{
        dispatch(BYACTIVITY());
    },[dispatch]);
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])


 function handleChange(e){
        setInput(()=>{
            const newState={
                 ...input,
            [e.target.name] : e.target.value
            }
         setErrors(valida(newState))
        

         return newState
           
        })
       
        
    }

function handledificulty(e){
    if(e.target.checked){
        setInput({
            ...input,
            difficulty:e.target.value
        })
    }
}
function handleSeason(e) {
    setInput({
        ...input,
        season: e.target.value
    })
}
function handlecountries(e){
    setInput({
        ...input,
        countries:[...input.countries,e.target.value]
    })
}

function handlesutmit(e){
    
    
    if(input.name && input.duration && input.season && input.countries  && input.difficulty && !errors.name && !errors.duration && !errors.season && !errors.difficulty && !errors.countries){ 
     e.preventDefault();
     dispatch(postActivity(input))
    alert("actividad creada")
    setInput({
        name:"",
        difficulty:"",
        season:"",
        duration:"",
        countries:[],

    })

    }else{ 
        e.preventDefault();
       return errors
       
    }
   
   
}
    
    function handleDelete(e) {
    setInput({
        ...input,
        countries: input.countries.filter(c => c !== e)
    })
}



    return(
        <div className={style.form} >
            <div className={style.divb}> <button className={style.button} type="submit" onClick={handlesutmit}>Add Activity</button>
                 <Link to= '/home'><button className={style.button2}>Back</button></Link></div>
           
            <h1> Create Activities</h1>
            <div className={style.contenedor}>
                <form name="formulario" onSubmit={handlesutmit}>
            <div className={style.act}>
                    <label>Activity: </label>

                    <input type="text" 
                    value={input.name} 
                    name="name"  
                    onChange={handleChange} 
                    placeholder="Activity name..." 
                    className={errors?.name &&'danger'}
                    required />
                     <span className={style.error} >{errors.name||""}</span>
                    </div>

                 <div >
                    <label className={style.duration}>Duration: </label>

                    <input 
                    type="text" 
                    value={input.duration} 
                    name="duration" 
                    onChange={handleChange} 
                    placeholder="Activity duration..." 
                    />
                    <span className={style.error} >{errors.duration||""}</span>
                </div>


                <div  className={style.countriesSelected}>
                <label className={style.label}>Season: </label>
                 <br></br>
                <select onChange={handleSeason} required>
                    <option value="" hidden>Select season</option>
                        {season.map(e => (
                        <option value={e} name="season" key={e} >{e}</option>
                        ))}
                    </select>
               
              
                </div>

                 <div className={style.diffi}>
                    <label className={style.diffi}>Difficulty: </label>

                    <label> <input type="checkbox" name="difficulty" value="1" onChange={handledificulty}/>1</label>
                    <label><input type="checkbox" name="difficulty" value="2"onChange={handledificulty} />2</label>
                    <label> <input type="checkbox" name="difficulty" value="3"onChange={handledificulty}/>3</label>
                    <label> <input type="checkbox" name="difficulty" value="4"onChange={handledificulty}/>4</label>
                    <label> <input type="checkbox" name="difficulty" value="5"onChange={handledificulty}/>5</label>
                   
                </div>
                
              
                <div className={style.countriesSelected}>
                <label className={style.label1}>Country:  </label>
                <br />
                <select onChange={handlecountries} name="countries" required >
                <option value="" hidden>Select country</option>
                {countries.map(e => (
                <option value={e.id} name="countries" key={e.id} >{e.name}</option>
                    ))}
               <p>{errors.countries||""}</p>
                </select>
                </div> 
                <div>
                 
                    {input.countries.map(i =>
                        <div className={style.lu}>
                            {i}
                           <lu> <button className={style.button1} type="button" onClick={()=>handleDelete(i)}>X</button></lu>
                           
                        </div>)}

        
                </div>
               
            </form>
            <br></br>
            <br/>
            <br/>
         
                

            </div>
            </div>
            
    )

  

    



}
export default  CreateAtivity;

