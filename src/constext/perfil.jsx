import { createContext, useState } from "react";

export const PerfilContext = createContext();

export function PerfilProvider ({children}){
    const [perfil, setPerfil] = useState({name:"",email:"",phone:""})

    return(
        <PerfilContext.Provider value={{perfil, setPerfil}}>
            {children}
        </PerfilContext.Provider>
    )
}