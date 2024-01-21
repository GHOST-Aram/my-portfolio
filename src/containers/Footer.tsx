import React from 'react'
import LocationAddress from '../components/LocationAddress'
import InternetMedia from '../components/InternetMedia'
import EmailAndPhone from '../components/EmailAndPhone'

const Footer = () => {
  return (
    <footer className='container flex'>
      <LocationAddress city='Kisumu' street='Maseno University' country='Kenya'/>
			<InternetMedia />
			<EmailAndPhone 
				email='owinoojala254@gmail.com'
				phone='+254796699806'
				whatsapp='+254796699806'
			/>
    </footer>
  )
}

export default Footer