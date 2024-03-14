import React from 'react';
import './articulos.css';
import Boton from '../ui/boton/boton.jsx';
function Articulos (props){
  return (
    <>
    <section className='seccionArticulo' style={{ backgroundImage: `url(${props.imagenArticulo})` }} >
        <Boton textoBoton="Saber mas" className="botonArticulo"/>
    </section>
    </>
  );
};

export default Articulos;