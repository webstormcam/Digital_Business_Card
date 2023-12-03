
import faceBook from "./assets/Facebook_Icon.png"
import gitHub from "./assets/GitHub_Icon.png"
import instaGram from "./assets/Instagram_Icon.png"
import twitter from "./assets/Twitter_Icon.png"



function Footer(){
    return (
        <footer>
            <div className="footer_container">
                <a href="https://twitter.com/NintendoAmerica?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><img src={twitter} alt="Twitter icon" /></a>
               <a href="https://www.facebook.com/nintendoofcanada/" target="_blank"> <img src={faceBook} alt="Facebook Icon" /></a>
                <a href="https://www.instagram.com/nintendoamerica/?hl=en" target="_blank"><img src={instaGram} alt="Instagram Icon" /></a>
               <a href="https://github.com/Nintendo" target="_blank"><img src={gitHub} alt="Github Icon" /></a>
            </div>
        </footer>
    )
}

export default Footer