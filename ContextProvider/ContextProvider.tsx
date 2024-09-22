"use client"
import React, { useState } from 'react'
import { createContext } from 'react'

type TContextType ={
  setFeatureSelectedInfoAll?:any;
  featureSelectedInfoAll?:any;
  featureTotalPrice?:any;
  setFeatureTotalPrice?:any
  user?:any;
  token?:any;
}


export const MyContext = createContext<TContextType | undefined>(undefined);

 const ContextProvider = ({children}:any)=> {
  const [featureSelectedInfoAll, setFeatureSelectedInfoAll] = useState<any>([]);
  const [featureTotalPrice, setFeatureTotalPrice] = useState<number>(0);
  const [user,setUser] = useState<any>(true);
  const [token,setToken] = useState<any>(true);

    const contextValue:TContextType ={
        setFeatureSelectedInfoAll,
        featureSelectedInfoAll,
        setFeatureTotalPrice,
        featureTotalPrice,
        user,
        token,
    }
  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextProvider
