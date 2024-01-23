import { FaSquareXTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDev } from "react-icons/fa";


const InternetMedia = () => {
  return (
    <div className="flex gap-8 social-media">
        <button className="contact-btn">
            <a href="https://twitter.com/FelixOOSenior">
                <FaSquareXTwitter />
            </a>
        </button>
        <button className="contact-btn">
            <a href="https://github.com/GHOST-Aram">
                <FaGithub />
            </a>
        </button>
        <button className="contact-btn">
            <a href="https://www.linkedin.com/in/ojala-f-senior-39919119b/">
                <FaLinkedin />
            </a>
        </button>
        <button className="contact-btn">
            <a href="https://dev.to/ghostaram">
                <FaDev />
            </a>
        </button>
       
    </div>
  )
}


export default InternetMedia