import React, {useState} from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { obtenerDiferencia, calcularMarca, calcularPlan } from "../helpers";

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;
const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;
const Error = styled.div`
    background-color: red;
    padding: 1rem;
    text-align: center;
    width: 100%;
    border-radius: 1rem;
    color: white;
    margin-bottom: 1rem;
`;

const Formulario = ({guardarResumen, guardarCargando}) => {

    // Creando el State del formulario

    const [datos, guardarDatos] = useState({
        marca: ' ',
        year: ' ',
        plan: ' '
    });


    // Creando el State de la validación
    
    const [error, guardarError] = useState(false);


    // Extrayendo los elementos para aplicar el Destructuring

    const { marca, year, plan} = datos;

    // Leer los datos del usuario con el State

    function obtenerInformacion (e) {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
        
        return;
    }

    const agregarCotizador = (e) => {
        e.preventDefault()

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === "") {
            guardarError(true)

            return;
        }
        
        guardarError(false)

        // Partimos de una base de €150 para que vaya aumentando

        let resultado = 280;

        // Obtener la diferencia de años

        const diferencia = obtenerDiferencia(year);

        // Por cada año hay que restar el 3% del resultado 

        resultado -= ((diferencia * 3) * resultado) / 100;

        // Carros Europeos tienen un 30% // Carros Asiaticos tienen un 5% //  Carros Americanos tienen un 15%

        resultado = calcularMarca(marca) * resultado;

        // Seguro Básico aumenta un 20%

        const porcentaje = calcularPlan(plan);

        resultado = parseFloat(porcentaje * resultado).toFixed(2);


        // Muestra el Spinner
        guardarCargando(true)

        
        setTimeout(() => {

            // Apaga el Spinner durante cierto tiempo
            guardarCargando(false)

            // Muestra el total del Cotizador
            guardarResumen({
                cotizacion: resultado,
                datos
            })
        }, 3000);
        
    }
    
    return ( 
        <form
            onSubmit={agregarCotizador}
        >
            { error ? <Error>Todos los campos son obligatorios</Error> :null}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                    
                    >
                    <option value="">-- Seleccionar --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </Campo>
            
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}
                /> Básico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformacion}

                /> Completo
            </Campo>
            
            <Boton 
                type="submit"
               
            >Cotizar</Boton>
            
        </form>

    );
}

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}
 
export default Formulario;

