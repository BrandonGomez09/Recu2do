import './post.css';
import like from '../../assets/Icons/likeGreyIcon.png';
import share from '../../assets/Icons/shareIcon.png';
import coment from '../../assets/Icons/comentIcon.png';
function BarraInferior() {
    return (
        <>
            <div className="post_bottom">
                <div className="post_bottom_interactions">
                    <span className="post_interactions_icon"></span>
                    <img src={like} alt="err" />
                    <a href="" className="post_interactions_link">10 me gusta</a>
                </div>
                <div className="d-flex-beetween">
                    <div className="post_bottom_interactions">
                        <span className="post_interactions_icon"></span>
                        <img src={coment} alt="err" />
                        <a href="" className="post_interactions_link">2 Comentarios</a>
                    </div>
                    <div className="post_bottom_interactions">
                        <span className="post_interactions_icon"></span>
                        <img src={share} alt="err" />
                        <a href="" className="post_interactions_link">0 Compartir</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BarraInferior;