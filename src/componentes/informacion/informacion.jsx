import React from 'react';
import imgP1 from '../../assets/perfil2.png';
import imgP2 from '../../assets/perfil3.png';
import './informacion.css';
function Informacion() {
    return (
        <>
            <div className='seccionInformacion'>
                <div className='seccionInformacionDatos'>
                    <h3>Acerca de mí</h3>
                    <p>Figma ipsum component variant main layer. Reesizing undo figjam align inspect. Ipsum layer stroke slice frame italic background. Bold boolean duplicate layout overflow. Scale draft ipsum main background figma selection. Star ellipse comment figma content draft. Figma main main arrange strikethrough. List slice pixel ellipse figjam text. Arrow line variant boolean device star hand comment layer. Device shadow pixel comment scale figjam bold library font group. Arrow style slice reesizing underline prototype. Comment move underline arrange style slice move reesizing pixel.</p>
                </div>
                <div className='seccionAmigos'>
                    <h4>Amigos</h4>
                    <p>123 amigos</p>
                    <div>
                        <img src={imgP1} alt="" />
                        <h5>Jose Jose</h5>
                    </div>
                    <div>
                        <img src={imgP2} alt="" />
                        <h5>Alfredo Olivas</h5>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Informacion;