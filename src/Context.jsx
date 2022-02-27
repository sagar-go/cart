import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const MyContext = createContext();

export function Context({children}) {
    const [prod,setprod] = useState([]);
    const [cart,setcart] = useState([]);
    const[search,setsearch] =useState("");
    const [toggle,settoggle] = useState(false);
    const[slider,setslider]= useState(1000);
    const [rating,setrating] =useState(5);

  return (
      <>
   <MyContext.Provider value={{prod,setprod,cart,setcart,search,setsearch,toggle,settoggle,slider,setslider,rating,setrating}}>
       {children}
   </MyContext.Provider>
   </>
)
}



