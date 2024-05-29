import { createContext, useState } from "react";

export const FiltersContext = createContext()

export function FiltersProvider({ children }) {
    const [filtro, setFiltro] = useState({ minPrice: 0, minRating: 4.0, defaultBrand: "all" })

    return(
        <FiltersContext.Provider value={{filtro, setFiltro}}>
            {children}
        </FiltersContext.Provider>
    )
}