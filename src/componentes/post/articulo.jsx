import './post.css';
import Reacciones from './reacciones';


function Articulo(props){
    // let banner = "https://s3-alpha-sig.figma.com/img/062c/5214/2b13f65cb595899054d25579108619e2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CTwOyQJPtl4d3vsmEyqUprlAnibc38DKLEZosgFyyx8GXuYQ7h-j2rTYZmcrkLqp0KOVnjaiQB1FyrVNhlUCdsP6bw462-mugg3I3XCcxi9qsp8UpmjWm7nSSOcNFZzqoGAElvCIG4aO32pXCsKFmhYUMuEW-quykVUr5e-ossiChx-4Fqi4Et5hbPpmYeSjIWzHmSxBO9eObDuc3dFjCTnot7zGVPaGoa07SezILH1QMRbL4kqglA9rcoTEOyWE~hXSH6iPd6L5nG2J5vf6bmWbO4W5J947tx6HzjYPEMLOGjU~m66XnA2veYs4kmc9hqNGrymJN8FbN2q5Rf0UpA__";
    return(
        
        <>
            <article className="post">
                <div className="post_profile">
                    <img className="post_image" src={props.srcImg} alt="" />
                    <div className="username">
                        <h5 className="not-margin post-username">Jesus G.</h5>
                        <span className="post_date">4 Horas</span>
                    </div>
                </div>
                <div className="post-description">
                    <p className='post-text'>{props.textoP}</p>
                </div>
                <div className="post_banner">
                    <img className="post_thumbnail" src={props.srcBanner} alt="" />
                </div>
                <div className="post_interactions">
                <Reacciones/>
                </div>
            </article>
        </>
    );
}
export default Articulo;