import React from "react";
import '../../css/medicinas.css';

function BtnMedicina() {
    return(
        <div className='contenedor-botones'>

            <a class="waves-effect waves-light btn buttonMed">ANALGESICOS</a>
            <a class="waves-effect waves-light btn buttonMed">ANTIBIOTICOS</a>
            <a class="waves-effect waves-light btn buttonMed">ANTIALERGICOS</a>
            <a class="waves-effect waves-light btn buttonMed">PRESION</a>
            <a class="waves-effect waves-light btn buttonMed">COLON</a>
            <a class="waves-effect waves-light btn buttonMed">VITAMINAS</a>
          
        </div>
    )
}

export default BtnMedicina;