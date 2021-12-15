import React from "react";
import styled from "@emotion/styled";
import {primeraLetra} from "../helpers"
import PropTypes from "prop-types";

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    color: #FFFFFF;
    margin-top: 1rem;
    background-color: #00838F;
`;


const Resumen = ({datos}) => {
    
    // Aplicamos un Destructuring para no tener que escribir punto a punto

    const { marca, year, plan } = datos;

    if(marca === " " || year === " " || plan === " ") {
        return null;
    }
    
    return ( 

        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>

            <ul>
                <li>Marca: {primeraLetra(marca)} </li>
                <li>Plan: {primeraLetra(plan)} </li>
                <li>Año del Vehículo: {year}</li>
            </ul>


        </ContenedorResumen>
        
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

 
export default Resumen;