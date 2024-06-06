import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFilters } from "./useFilters";
import { SearchContext } from "../constext/search";
import { ProductContext } from "../constext/product";

export function useNavegation() {
    const {listProducts} = useContext(ProductContext)
    const { idProductCategory } = useParams()
    const [titleHome, setTitleHome] = useState()
    const [listaFiltrada, setListaFiltrada] = useState([])
    const { filtro, fitrarLista } = useFilters()
    const { search } = useContext(SearchContext)

    useEffect(() => {
        setTitleHome(idProductCategory)
        setListaFiltrada(fitrarLista(listProducts, idProductCategory, search))
    }, [idProductCategory, filtro, search, listProducts])

    return { titleHome, listaFiltrada }
}