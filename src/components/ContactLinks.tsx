import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const ContactLinks = ({ email, phone, whatsapp }: ContactLinksProps) => {
    return (
        <div className="contact-links">
            <a href="https://twitter.com/FelixOOSenior">
                <FaSquareXTwitter />
            </a>
        
            <a href="https://github.com/GHOST-Aram">
                <FaGithub />
            </a>
        
            <a href="https://www.linkedin.com/in/ojala-f-senior-39919119b/">
                <FaLinkedin />
            </a>
        
            <a href="https://dev.to/ghostaram">
                <FaDev />
            </a>

            <a  href={`mailto: ${ email }`} >
                <IoMail />
            </a> 
            <a  href={`tel: ${ phone }`} >
                <FaPhoneSquareAlt />
            </a>
            <a  href={`https://wa.me/${whatsapp}`} >
                <FaWhatsappSquare />
            </a>
        </div>
    )
}

interface ContactLinksProps{
    email: string,
    phone: string
    whatsapp: string
}

export default ContactLinks