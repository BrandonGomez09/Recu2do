import React from 'react';
import fotoPerfil from '../../assets/fotoPerfil.png';
import './cardPerfil.css';
function CardPerfil() {
    return (
        <>
            <div className='perfilPresentacion'>
                <img src={fotoPerfil} alt="err" />
                <div>
                    <div>
                        <h3>Brandon Gomez</h3>
                        <p>Ing. En Software</p>
                    </div>
                    <div className='hobbies'> <p>Materias</p> <p>Deportes</p> <p>Comidas</p> <p>Series</p> <p>Estudios</p></div>
                </div>
                <div><a href="">Brandon Gomez</a> <a href="">Brandon_Gomez</a></div>
            </div>
        </>
    );
};
export default CardPerfil;