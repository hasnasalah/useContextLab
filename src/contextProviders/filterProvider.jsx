import { FilterContext } from "../context/FilterContext";
import {useState} from "react";



export function FilterProvider({children}) {
const[filter,setFilter]=useState("all");

const changeFilter = (newFilter) => {
  setFilter(newFilter);
};

    return(

     <FilterContext.Provider value={{filter,changeFilter}}>
   {children}
</FilterContext.Provider>
    

    );

}