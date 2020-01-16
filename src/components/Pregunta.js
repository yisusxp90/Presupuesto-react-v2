import React, {Fragment, useState} from 'react';
import Error from "./Error";

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    // definir State
    const [cantidad, guardarCantidad] = useState(0);

    const [error, guardarError] = useState(false);

    // funcion que lee el presupuesto
    const definirPresupuesto = (e) => {
        guardarCantidad(parseInt(e.target.value));
    };

    // submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault();
        // validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        // si pasa la validacion
        guardarError(false);
        // enviamos al state principal de la aplicacion mediante las props funciones
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    };

    return (
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            {error ? <Error mensaje="Presupuesto Incorrecto"/> : null}

            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Presupuesto"
                />
            </form>
        </Fragment>
    );
};

export default Pregunta;