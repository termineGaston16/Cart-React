import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFilters } from "./useFilters";
import { listOfProducts } from "../json/products.json"
import { SearchContext } from "../constext/search";

export function useNavegation() {
    const { idProductCategory } = useParams()
    const [titleHome, setTitleHome] = useState()
    const [listaFiltrada, setListaFiltrada] = useState([])
    const { filtro, fitrarLista } = useFilters()
    const { search } = useContext(SearchContext)

    useEffect(() => {
        setTitleHome(idProductCategory)
        setListaFiltrada(fitrarLista(listOfProducts, idProductCategory, search))
    }, [idProductCategory, filtro, search])

    return { titleHome, listaFiltrada }
}