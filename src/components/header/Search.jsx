import { useContext } from "react";
import { SearchContext } from "../../constext/search"
import { useNavigate } from "react-router-dom";
import "../../css/search.css"


export default function Search() {

    const { setSearch } = useContext(SearchContext)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const query = new window.FormData(event.target).get("inputSearchIndex")
        setSearch(query)
        document.title = `${query} | search... | Cart React`
        if (query) navigate(`/buscar/${query}`);
    }



    return (
        <form onSubmit={handleSubmit} className="search-header-form">
            <input name="inputSearchIndex" type="search" placeholder="Buscar aquí..." className="search-header-form-input" />
            <button type="submit" className="search-header-form-btn-buscar">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search search-header-form-btn-buscar-svg" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button>
        </form >
    )
}