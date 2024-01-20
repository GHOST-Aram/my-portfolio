import { FaSquareXTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDev } from "react-icons/fa";


const InternetMedia = () => {
  return (
    <div>
        <h4 className="mb-4">On the Internet</h4>
        <div className="social-media-link">
            <a 
                className='flex gap-8'
            href="https://twitter.com/FelixOOSenior">
                <FaSquareXTwitter />
                <span>Twitter</span>
            </a>
        </div>
        <div className="social-media-link">
            <a 
                className='flex gap-8'
            href="https://github.com/GHOST-Aram">
                <FaGithub />
                <span>Github</span>
            </a>
        </div>
        <div className="social-media-link">
            <a 
                className='flex gap-8'
            href="https://www.linkedin.com/in/ojala-f-senior-39919119b/">
                <FaLinkedin />
                <span>LinkedIn</span>
            </a>
        </div>
        <div className="social-media-link">
            <a 
                className='flex gap-8'
            href="https://dev.to/ghostaram">
                <FaDev />
                <span>Technical articles</span>
            </a>
        </div>
    </div>
  )
}


export default InternetMedia