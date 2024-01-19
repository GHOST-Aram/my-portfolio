import React from 'react'

const HeroText = ({ text }: HeroProps) => {
    return (
        <h1>{text}</h1>
    )
}

interface HeroProps{
    text: string
}

export default HeroText