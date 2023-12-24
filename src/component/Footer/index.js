import './index.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(){
 
    return(
        <div className='footer'>
            <div className='texte'>
                <h3><a href='#projet'>Mes projets</a></h3>
                <h3><Link to="/ma-nouvelle-page" target='_blank'>CV</Link></h3>
            </div>
            <div className='texte2'>
                <h3>© Designed by Miranto</h3>
            </div>
            <div className='logo'>
                <a href='https://www.linkedin.com/in/miranto-rakotobe-7492312a4/' target='blank'><FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#ffffff" }} /></a>
                <a href='https://github.com/mimiranto' target='blank'><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "#ffffff" }} /></a>
            </div>
        </div>

    )

}
export default Footer;