import { useContext, useEffect, useId, useRef, useState } from "react"
import "../../css/perfilData.css"
import { CartContext } from "../../constext/cart";
import { PerfilContext } from "../../constext/perfil"

export default function PerfilData() {
    const { setPerfil } = useContext(PerfilContext)
    const { idNameFormPerfil } = useId();
    const { idEmailFormPerfil } = useId();
    const { id2EmailFormPerfil } = useId();
    const { idPhoneFormPerfil } = useId();
    const { setWearingCart } = useContext(CartContext);
    const [perfilLogged, setPerfilLogged] = useState(false)

    useEffect(() => {
        setWearingCart(true);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { idNamePerfilData, idEmailPerfilData, idPhonePerfilData, id2EmailPerfilData } = Object.fromEntries(new window.FormData(event.target))
        if (idNamePerfilData === "" || idEmailPerfilData === "" || idPhonePerfilData === "" || id2EmailPerfilData === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se puede dejar campos vacíos",
            });
            return;
        }

        if (idEmailPerfilData !== id2EmailPerfilData) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El correo no coincide.",
            });
            return;
        }

        setPerfil({ name: idNamePerfilData, email: idEmailPerfilData, phone: idPhonePerfilData })
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

                    <label htmlFor={id2EmailFormPerfil}>Re-Ingresa tu correo electrónico</label>
                    <input type="email" name="id2EmailPerfilData" id={id2EmailFormPerfil} />

                    <label htmlFor={idPhoneFormPerfil}>Ingresa tu número de telefono</label>
                    <input type="text" name="idPhonePerfilData" id={idPhoneFormPerfil} />

                    <button type="submit">Registrarme</button>
                </form>
            )}
        </>
    );
}
