import FilterContext from "../context/FilterContext";
import {useState} from "react";



export default function FilterProvider({children}) {
const[filter,setFilter]=useState("all");

const changeFilter = (newFilter) => {
  setFilter(newFilter);
};

    return(

     <FilterContext.Provider value={{filter,setFilter,changeFilter}}>
    {children}
   </FilterContext.Provider>
    

    );

}