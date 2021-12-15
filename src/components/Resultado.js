import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
    
`;
const TextoCotización = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    color: black;
    
`;
const CotizacionSalto = styled.p`
    margin-top: 5px;
    color: black;
    font-weight: bold;
`


const Resultado = ({cotizacion}) => {
   
    
    return ( 
        (cotizacion === 0 

        ? 
            <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
        :

            <TransitionGroup
                component="p"
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}  
                    timeout={{enter: 200, exit: 200}}  
                >
                    <ResultadoCotizacion>

                        <TextoCotización> El total es: </TextoCotización>
                        <CotizacionSalto> € {cotizacion} </CotizacionSalto>

                    </ResultadoCotizacion>
                </CSSTransition>
            </TransitionGroup>
            

            
        )
    );
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;