import './post.css';
import like from '../../assets/Icons/likeIcon.png';
import coment from '../../assets/Icons/comentIcon.png';
import share from '../../assets/Icons/shareIcon.png';
function Reacciones(){
    return(
    <>
    <nav className="post_interactions_nav">
                            <li>
                                <span className="post_interactions_icon"></span>
                                <img src={like} alt="" />
                                <a href="" className="post_interactions_link">10 me gusta</a>
                            </li>
                            <li>
                                <span className="post_interactions_icon"></span>
                                <img src={coment} alt="" />
                                <a href="" className="post_interactions_link_inherit ">2 Comentarios</a>
                            </li>
                            <li>
                                <span className="post_interactions_icon"></span>
                                <img src={share} alt="" />
                                <a href="" className="post_interactions_link">0 Compartir</a>
                            </li>
                        </nav>
    </>
    );
}
export default Reacciones;