import React from 'react';
import Boton from '../ui/boton/boton.jsx';
import Logo from '../../assets/Icons/Logo.png';
import './header.css';
import useNavigateFunc from '../ui/boton/texto.jsx'; // Asegúrate de importar useNavigateFunc
import Input from '../ui/input/input.jsx';
import { useNavigate } from 'react-router-dom';

function Header() { 
    const navigate = useNavigate();

    const handlerClick = () => {
        navigate('/perfil');
    }

    const texto = useNavigateFunc(); // Llama a la función para obtener el array de texto

    return (
        <>
            <header className='cabecera'>
                <div className='divHeader'>
                    <img className='imgLogo' src={Logo} />
                    <Input placeholder="Buscar" className="inputbuscar"/>
                    
                    {texto.map((text, key) => (
                        <Boton key={key} textoBoton={text.nombre} onClick={text.funcion} className="botonHeader"/>
                    ))}
                </div>
                
                <div className='divHeader'>
                    <Boton onClick={() => handlerClick()} textoBoton="Mi perfil" className="botonHeader2"/>
                    <Boton className="botonHeader2" textoBoton=""/>
                </div>
            </header>
        </>
    );
};

export default Header;
