import React, { ReactComponentElement } from 'react'

const Footer = ({ children }: FooterProps) => {
  return (
    <footer className='container flex justify-space-between'>{ children }</footer>
  )
}

interface FooterProps{
    children: ReactComponentElement<any>|ReactComponentElement<any>[]
}

export default Footer