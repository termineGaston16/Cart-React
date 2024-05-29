import { useContext, useEffect } from "react";
import { SearchContext } from "../../constext/search"

export default function Search() {

    const { setSearch } = useContext(SearchContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const query = new window.FormData(event.target).get("inputSearchIndex")
        setSearch(query)
    }



    return (
        < form onSubmit={handleSubmit}>
            <input name="inputSearchIndex" type="search" placeholder="Buscar aquí..." />
            <button type="submit">Buscar</button>
        </form >
    )
}