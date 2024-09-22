"use client"
import React, { useState } from 'react'
import { createContext } from 'react'


export const MyContext = createContext(undefined);

 const ContextProvider = ({children})=> {
  const [featureSeletedInfoAll, setFeatureSeletedInfoAll] = useState([]);
  const [featurTotalPrice, setFeaturTotalPrice] = useState(0);

    const contextValue ={
        setFeatureSeletedInfoAll,
        featureSeletedInfoAll,
        setFeaturTotalPrice,
        featurTotalPrice
    }
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  )
}


export default ContextProvider
