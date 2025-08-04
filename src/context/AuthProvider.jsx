import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'
export  const AuthContext = createContext()
const AuthProvider = ({children}) => {
    

  return (
    <div>
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
