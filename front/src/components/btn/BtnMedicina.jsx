import React, { useState, useEffect } from "react";
import med from '../../css/medicinas.module.css';
const API = "http://localhost:4000";

function BtnMedicina() {
    const [body, setBody] = useState([])

    const fetchAPI = async () => {
        const data = await fetch(`${API}/view/tags-products`)
        const dataJson = await data.json()
        console.log(dataJson)
        setBody(dataJson)
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <div className={med.contenedorBotones}>
            <>
                {
                    body.map((getTags, index) => (
                        <button key={getTags.id} className={`${med.btn} ${med.buttonMed}`} >{getTags.tipo_consumo}</button>
                    ))
                }
            </>
        </div>
    )
}

export default BtnMedicina;