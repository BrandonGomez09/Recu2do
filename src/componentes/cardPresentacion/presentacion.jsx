import React from 'react';
import foto from '../../assets/fotoPerfil.png';
import portada from '../../assets/portada.jpg';
import '../cardPresentacion/presentacion.css';
function Presentacion (){
  return (
    <>
    <div className='card'>
        {/* <img src={portada} alt="" /> */}
        <img className='perfilFoto' src={foto} alt="" />
        <h3>Brandon Gomez</h3>
        <p>Figma ipsum component variant main <br/> layer. Boolean frame scale horizontal<br/> vertical component team link.</p>
        <div className='cardInferior'>
        <p>24 <br/> publicaciones</p> <p>136<br/> articulos</p>
        </div>
    </div>
    </>
  );
};

export default Presentacion;