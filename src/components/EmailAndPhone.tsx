import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const EmailAndPhone = ({ email, phone, whatsapp }: EmailAndPhoneProps) => {
    return (
        <div className="email-and-more">
            <h4>Contact Me</h4>
           <div>
                <a 
                    className='flex gap-8'
                    href={`mailto: ${ email }`}
                >
                    <MdEmail />
                    <span> { email } </span>
                </a>
            </div> 
            <div>
                <a 
                    className='flex gap-8'
                    href={`tel: ${ phone }`}
                >
                    <FaPhoneSquareAlt />
                    <span>{ phone }</span>
                </a>
            </div>
            <div>
                <a 
                    className='flex gap-8'
                    href={`https://wa.me/${whatsapp}`}
                >
                    <FaWhatsappSquare />
                    <span>+254796699806</span>
                </a>
            </div>
        </div>
    )
}

interface EmailAndPhoneProps{
    email: string,
    phone: string
    whatsapp: string
}

export default EmailAndPhone