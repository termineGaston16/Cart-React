import { useContext } from "react";
import { SearchContext } from "../../constext/search"
import { useNavigate  } from "react-router-dom";


export default function Search() {

    const { setSearch } = useContext(SearchContext)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const query = new window.FormData(event.target).get("inputSearchIndex")
        setSearch(query)
        if (query) navigate(`/buscar/${query}`);
    }

    return (
        < form onSubmit={handleSubmit}>
            <input name="inputSearchIndex" type="search" placeholder="Buscar aquí..."/>
            <button type="submit">Buscar</button>
        </form >
    )
}