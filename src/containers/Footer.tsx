import React from 'react'
import EmailAndPhone from '../components/ContactLinks'

const Footer = () => {
  return (
    <footer className='container'>
			<EmailAndPhone 
				email='owinoojala254@gmail.com'
				phone='+254796699806'
				whatsapp='+254796699806'
			/>
			<p>Copyright &copy; Felix Owino Ojala {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer