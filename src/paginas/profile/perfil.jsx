import React from 'react';
import Header from '../../componentes/header/header';
import './perfil.css';
import dataArticulo from '../../componentes/articulos/articulos.js';
import Articulos from '../../componentes/articulos/articulos.jsx';
import Post from '../../componentes/post/post.jsx';
import datos from '../feed/feed.js';
import CardPerfil from '../../componentes/cardPerfil/cardPerfil.jsx';
import Informacion from '../../componentes/informacion/informacion.jsx';
function Perfil() {
    return (
        <>
            <Header />
            <div className='divPadre'>
                <div className='divSeccionPerfil'>
                    <CardPerfil/>
                    <Informacion/>
                    {datos.map((data, key) => (<Post srcImg={data.fotoPerfil} srcBanner={data.bannerImg} textoP={data.textoPublicacion} />))}
                </div>
                <div className='divSeccionArticulos'>
                    <h4>Artículos recientes</h4>
                    <p>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</p>
                    {dataArticulo.map((data, key) => (<Articulos textoArticulo="dasd" imagenArticulo={data} />))}
                </div>
            </div>
        </>
    );
};
export default Perfil;