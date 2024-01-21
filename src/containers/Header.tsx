import React, { ReactComponentElement } from 'react'

const Header = ( { children }: HeaderProps) => {
  return (
    <header>{ children }</header>
  )
}

interface HeaderProps{
  children: ReactComponentElement<any>
}

export default Header