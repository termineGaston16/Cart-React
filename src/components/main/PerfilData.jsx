import { useContext, useEffect, useId, useRef, useState } from "react"
import "../../css/perfilData.css"
import { CartContext } from "../../constext/cart";
import { PerfilContext } from "../../constext/perfil"

export default function PerfilData() {
    const { perfil, setPerfil } = useContext(PerfilContext)
    const { idNameFormPerfil } = useId();
    const { idEmailFormPerfil } = useId();
    const { idPhoneFormPerfil } = useId();
    const { setWearingCart } = useContext(CartContext);
    const [perfilLogged, setPerfilLogged] = useState(false)

    useEffect(() => {
        setWearingCart(true);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { idNamePerfilData, idEmailPerfilData, idPhonePerfilData } = Object.fromEntries(new window.FormData(event.target))
        setPerfil({ name: idNamePerfilData, email: idEmailPerfilData, phone: idPhonePerfilData })

        if (idNamePerfilData === "" || idEmailPerfilData === "" || idPhonePerfilData === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se puede dejar campos vacíos",
            });
            return;
        }
        setPerfilLogged(true)
        setWearingCart(false)
    }

    return (
        <>
            {!perfilLogged && (
                <form onSubmit={handleSubmit} className="form-perfil">
                    <label htmlFor={idNameFormPerfil}>Ingresa tu nombre</label>
                    <input type="text" name="idNamePerfilData" id={idNameFormPerfil} />

                    <label htmlFor={idEmailFormPerfil}>Ingresa tu correo electrónico</label>
                    <input type="email" name="idEmailPerfilData" id={idEmailFormPerfil} />

                    <label htmlFor={idPhoneFormPerfil}>Ingresa tu número de telefono</label>
                    <input type="text" name="idPhonePerfilData" id={idPhoneFormPerfil} />

                    <button type="submit">Registrarme</button>
                </form>
            )}
        </>
    );
}
