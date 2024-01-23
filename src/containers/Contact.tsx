import React from 'react'
import SectionTitle from '../components/SectionTitle'

const Contact = () => {
  return (
    <section id='contact'>
        <SectionTitle text='Contact Me' />
        <div className="container">
            <p className='text-center'>
                Send me an email via <a href="mailto:owinoojala254@gmail.com">
                    owinoojala254@gmail.com.
                </a> You can also send me a direct message through <a href={`https://wa.me/${+254796699806}`}>WhatsApp +254796699806</a>, 
                Twitter <a href="https://twitter.com/FelixOOSenior">@FelixOOSenior</a> or 
                my <a href="#LinkedIn">LinkedIn</a>
            </p>
        </div>
    </section>
  )
}

export default Contact