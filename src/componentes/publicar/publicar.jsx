import React from 'react';
import './publicar.css';
import foto from '../../assets/fotoPerfil.png';
import Input from '../ui/input/input';
import palomita from '../../assets/Icons/checkIcon.png';
import Boton from '../ui/boton/boton.jsx';
import publicarTexto from './publicar';
function Publicar() {
  return (
    <>
      <div className='publicar'>
        <div className='publicarSecciones'>
          <img src={foto} className='fotoPerfil' alt="err" />
          <Input placeholder="Crear Publicacion" className="" />
          <img src={palomita} alt="err" className='palomita' />
        </div>
        <div className='publicarSecciones2'>
          {publicarTexto.map((texto, key) => (
            <Boton key={key} textoBoton={texto} className="botonPublicar" />
          ))}

        </div>
      </div>

    </>
  );
};

export default Publicar;