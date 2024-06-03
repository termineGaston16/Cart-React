import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";
import "../../css/filters.css"

export default function Filters() {

    const inputPrecioId = useId()
    const inputRatingId = useId()
    const selectMarcaId = useId()

    const { filtro, setFiltro } = useFilters()

    const handleChangeMinPrice = (event) => {
        setFiltro(estadoAnterior => ({ ...estadoAnterior, minPrice: event.target.value }))
    }

    const handleChangeMinRating = (event) => {
        setFiltro(estadoAnterior => ({ ...estadoAnterior, minRating: event.target.value }))
    }

    const handleChangeBrand = (event) => {
        setFiltro(estadoAnterior => ({ ...estadoAnterior, defaultBrand: event.target.value }))
    }


    return (<>
        <aside className="aside-index" style={{ display: "flex", gap: "10px" }}>
            <div>
                <label htmlFor={inputPrecioId}>Precio</label>
                <input type="range" min="0" max="1800" value={filtro.minPrice} id={inputPrecioId} onChange={handleChangeMinPrice} />
                <span>${filtro.minPrice}</span>
            </div>

            <div>
                <label htmlFor={inputRatingId}>Rating</label>
                <input type="range" min="4.0" max="5.0" step="0.1" value={filtro.minRating} id={inputRatingId} onChange={handleChangeMinRating} />
                ⭐<span>{filtro.minRating}</span>
            </div>

            <div>
                <label htmlFor={selectMarcaId}>Marca</label>
                <select id={selectMarcaId} onChange={handleChangeBrand}>
                    <option value="all">Todas las marcas</option>
                    <option value="Golden">Golden</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="OPPO">OPPO</option>
                    <option value="Huawei">Huawei</option>
                    <option value="Microsoft Surface">Microsoft Surface</option>
                    <option value="Infinix">Infinix</option>
                    <option value="HP Pavilion">HP Pavilion</option>
                    <option value="Impression of Acqua Di Gio">Impression of Acqua Di Gio</option>
                    <option value="Royal_Mirage">Royal_Mirage</option>
                    <option value="Fog Scent Xpressio">Fog Scent Xpressio</option>
                    <option value="Al Munakh">Al Munakh</option>
                    <option value="Lord - Al-Rehab">Lord - Al-Rehab</option>
                    <option value="L'Oreal Paris">L'Oreal Paris</option>
                    <option value="Hemani Tea">Hemani Tea</option>
                    <option value="Dermive">Dermive</option>
                    <option value="ROREC White Rice">ROREC White Rice</option>
                    <option value="Fair & Clear">Fair & Clear</option>
                    <option value="Saaf & Khaas">Saaf & Khaas</option>
                    <option value="Bake Parlor Big">Bake Parlor Big</option>
                </select>
            </div>
        </aside>
    </>)
}