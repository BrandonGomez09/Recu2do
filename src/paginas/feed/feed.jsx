import React from 'react';
import Header from '../../componentes/header/header';
import Presentacion from '../../componentes/cardPresentacion/presentacion';
import './feed.css';
import Publicar from '../../componentes/publicar/publicar.jsx';
import  Post  from '../../componentes/post/post.jsx';
import datos from './feed.js';
import Articulos from '../../componentes/articulos/articulos.jsx';
import dataArticulo from '../../componentes/articulos/articulos.js';
function Feed() { 
    return (
        <>
            <Header />
            <div className='pantallaCompletaSecciones'>
                <div className='secciones'>
                    <Presentacion/>
                </div>
                <div className='secciones'>
                    <Publicar/>
                    {datos.map((data,key)=>(<Post srcImg={data.fotoPerfil} srcBanner={data.bannerImg} textoP={data.textoPublicacion}/>))}
                </div>
                <div className='secciones'>
                    <h4>Artículos recientes</h4>
                    <p>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</p>
                    {dataArticulo.map((data,key)=>(
                    <Articulos textoArticulo="dasd" imagenArticulo={data}/>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Feed;