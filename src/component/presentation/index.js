import './index.css';
import Photo from './asset/original_1-facebook-profile-picture-jpg.jpg';

function Presentation(){

    return(
        <div className='container'>
            
            <div className='photo'><img src={Photo} alt='Image'/></div>
           
           <div className='textecontainer'>
                <h1>Bienvenue sur mon portfolio , Je m'appelle Miranto Rakotobe</h1>
                <h3>Étant étudiant à l'IPSSI en Prépa Bachelor Dév & Cybersécurité, je suis actuellement en recherche d'un stage de 2 mois en rapport avec la cybersécurité. Passionné par les enjeux de protection des systèmes informatiques, je suis motivé à mettre en pratique les connaissances acquises au cours de ma formation et à contribuer activement à renforcer la sécurité numérique au sein d'entreprises. </h3>
           </div>

        </div>
    )
}
export default Presentation;