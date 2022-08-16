import React from 'react';
import { useEffect, useState} from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { getCountries, filterContinents,getActivitiy,BYACTIVITY,BYALFB,BYPOBLACION } from '../actions';
import {Link} from 'react-router-dom';
import Paginado from './Paginado';
import Card from './Card';
import SearchBar from './SerchBar';
import "./Home.css";



export default function Home(){
const dispatch = useDispatch()

const activity = useSelector(state => state.activity)
const [orden, setorden] = useState('')
 const allCountries = useSelector((state)=> state.countries)
const [currentPage,setCurrentPage]=useState(1)
const [CuntriesPerPage,setCuntriesPerPage]=useState(10);
const indexLastCountries=currentPage*CuntriesPerPage;
const idexFirstCuntries= indexLastCountries-CuntriesPerPage;

const currentCuntries= allCountries.slice(idexFirstCuntries,indexLastCountries)

const page= (pageNumber)=>{
    setCurrentPage(pageNumber);
  
}
     
     


useEffect(()=>{  
dispatch(getCountries())


},[dispatch])


function handleClick(e){
    e.preventDefault();
    dispatch(getCountries());

}

function handleFilterContinents(e){
    e.preventDefault()
    dispatch(filterContinents(e.target.value));
    setCurrentPage(1);
    setorden(e.target.value);
  
   
    
}
function handleFilterActivity(e){
    e.preventDefault();
    dispatch(BYACTIVITY(e.target.value));
    setorden(e.target.value);
    setCurrentPage(1);
   
    
 }
function handleorder(e){
    e.preventDefault();
    dispatch(BYALFB(e.target.value));
    setorden(e.target.value);
  
    
}
function handleOrderPopulation(e){
    e.preventDefault();
    dispatch(BYPOBLACION(e.target.value))
    setorden(e.target.value);
    setCurrentPage(1);

    
}



useEffect(() => {
    dispatch(getActivitiy())
    
}, [dispatch])




return (
    <div className="div">
       < div className='div2'> <h1>COUNTRIES</h1></div>
        <div>   
     <ul>

  <li> <Link to="/activities"><button className='btn'>Create Activity</button></Link></li>        
  <li><button className='btn' onClick={e=>{handleClick(e)}}>reload</button></li>
  <li> <select onClick={e=>{handleorder(e)}}>
    <option value='Asc' key='Asc'>A-Z</option>
    <option value='Desc' key='Desc'>Z-A</option>
    </select></li>
  <li>  <select onChange={e=>{handleOrderPopulation(e)}}>
        <option value='Max' key='Max'>Max population</option>
        <option value='Min' key='Min'>Min population</option>
       </select>
</li>
  <li><select onClick={e=>{handleFilterContinents(e)}}>
    <option value='All' key='All'>All continents</option>
    <option value='Africa' key='Africa'>Africa</option>
    <option value='Antarctica' key='Antarctica'>Antarctica</option>
    <option value='Asia' key='Asia'>Asia</option>
    <option value='Europe' key='Europe'>Europe</option>
    <option value='South America' key='South America'>South America</option>
    <option value='North America' key='North America'>North America</option>
    <option value='Oceania' key='Oceania'>Oceania</option>
    </select> </li>
    <li><select onClick={e=>{handleFilterActivity(e)}}>
    <option value='all' key='all'>All Activities</option>
   {
    activity.map(e=>(
        <option value={e} key={e}>{e}</option>
    ))

   }
    </select></li>

  

           <SearchBar/>
       
    </ul>
        </div>

    <div className='paginado'>
     
      <Paginado  CuntriesPerPage={CuntriesPerPage}
    allCountries={allCountries.length}
    page={page}
  
    />
    </div>
             {
             currentCuntries?.map(e=>{
                return (
                    <div className='paginado'>

                 <div >
                    <Link to ={`/country/${e.id}`}>
                    <div  >
                        <Card
                        img= {e.img}  
                         name= {e.name}
                        continents= {e.continents}
                         />
         
                      </div>
                     </Link>
                    
                      
                    </div>
                 </div>
                       
                       
                    
                 
                   
                );
             })

              }                    
                     

    
   

   
      
    
                       
      </div>
)


}