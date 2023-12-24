import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(){
 
    return(
        <div className='footer'>
            <div className='texte'>
                <h3><a href=''></a></h3>
                <h3><a href=''></a></h3>
            </div>
            <div className='texte2'>
                <h3>© Designed by Miranto</h3>
            </div>
            <div className='logo'>
                <a href=''><FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#ffffff" }} /></a>
                <a href=''><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "#ffffff" }} /></a>
            </div>
        </div>

    )

}
export default Footer;