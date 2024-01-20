import React from 'react'
import Footer from '../components/Footer'
import LocationAddress from '../components/LocationAddress'
import InternetMedia from '../components/InternetMedia'
import EmailAndPhone from '../components/EmailAndPhone'

const ContactsAndMore = () => {
    return (
		<Footer>
			<LocationAddress city='Kisumu' street='Maseno University' country='Kenya'/>
			<InternetMedia />
			<EmailAndPhone 
				email='owinoojala254@gmail.com'
				phone='+254796699806'
				whatsapp='+254796699806'
			/>
      </Footer>  
    )
}

export default ContactsAndMore