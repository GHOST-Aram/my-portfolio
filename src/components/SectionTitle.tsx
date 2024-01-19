import React from 'react'

const SectionTitle = ({ text }: SectionTitleProps) => {
    return (
        <h1 className='text-center section-title'>{ text }</h1>
    )
}

interface SectionTitleProps{
    text: string
}

export default SectionTitle