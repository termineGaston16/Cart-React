import { useContext } from "react";
import { FiltersContext } from "../constext/filters";

export function useFilters(){
    const {filtro, setFiltro} = useContext(FiltersContext)

    const fitrarLista= (listaDeObjetos, categoria, querySearch) =>{

        return listaDeObjetos.filter(product =>{
            return product.price >= filtro.minPrice && 
            product.rating >= filtro.minRating && 
           (filtro.defaultBrand === "all" || product.brand === filtro.defaultBrand) && 
           (!categoria || product.category === categoria) &&
           (!querySearch || querySearch && product.title.toLowerCase().includes(querySearch.toLowerCase()))
        })
    }

    return { filtro, setFiltro, fitrarLista }
}