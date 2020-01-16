import React, {useState} from 'react';
import Error from "./Error";
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        // construir el gasto
        guardarError(false);
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        };
        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        // resetear form
        guardarNombre('');
        guardarCantidad(0);
    };



    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>

            { error ? <Error mensaje="Campos obligatorios"/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>

                <input
                    type="text"
                    placeholder="ej. Transporte"
                    className="u-full-width"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>

                <input
                    type="number"
                    placeholder="ej. 300"
                    className="u-full-width"
                    value={cantidad.toString()}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
};

export default Formulario;