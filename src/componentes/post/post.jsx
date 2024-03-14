import './post.css';
import Articulo from './articulo';
import BarraInferior from './barraInferior';


 function Post(props) {
   

    return (
        <>
            <div className="post_divider">
                <Articulo srcImg={props.srcImg} srcBanner={props.srcBanner} textoP={props.textoP}/>
                <BarraInferior/>
            </div>
        </>
    );
}
export default Post;