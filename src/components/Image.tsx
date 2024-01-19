import React from 'react'

const Image = ({ alt, src }: ImageProps) => {
  return (
    <img src={src} alt={alt} />
  )
}

interface ImageProps{
    alt: string
    src: string
}
export default Image