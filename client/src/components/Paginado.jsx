import React from "react";
import style from "./Paginado.module.css";



function Paginado({CuntriesPerPage,allCountries,page}){

  const pageNumber=[]
  for(let i = 1; i<= Math.ceil(allCountries/CuntriesPerPage);i++){

    pageNumber.push(i);
  }

  return(
    <nav>
  

      <div className={style.div} >

        
     

   
       <ul>
        {
          pageNumber&&
          pageNumber.map(number=>(

          
          
            <button className={style.btn} onClick={()=>page(number)}> {number}</button>
          
            

          ))
        }
       </ul>
        </div>
    </nav>
  )


}





//        const countries = useSelector((state) => state.countries);
//         const [currentPage, setCurrentPage] = useState(0);  
       
        
      
//         let proximapage = () => {
//           if (countries.length <= currentPage + 10) {
//             setCurrentPage(currentPage);
//           } else setCurrentPage(currentPage + 10);
        
         
//         };
//         let anteriorpage = () => {
//           if (currentPage < 9) {
//             setCurrentPage(0);
//           } else {
//             setCurrentPage(currentPage - 10);
//           }
          
          
//         };
      
       
       
      
       
//      useEffect(() => {
//       setCurrentPage(0)
//     }, [countries]);
 
//       const filteredC = countries.slice(currentPage, currentPage + 10)

//     return(
//             <div>  
                   

              
              
                   
//             <div >
              
//           {
//             filteredC.map((e) => ( 
//               <Card
//                 img={e.img}
//                 name={e.name}
//                 continents={e.continents}
//               />))}
//           </div>
//          
//              <div>
//                   <button onClick={anteriorpage}>{'<'}</button>
                 
//                    <button onClick={proximapage}>{'>'}</button> 
//                 </div>
            
//         </div>
//     )

// }
export default Paginado;

  
