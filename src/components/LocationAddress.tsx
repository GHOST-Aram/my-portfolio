import React from 'react'

const LocationAddress = ( { city, country, street }: LocationAddressProps) => {
  return (
    <div className="location-details flex flex-col">
        <h4 className='p-0 mb-4'>Where to Find Me</h4>
        <div className="flex flex-col">
            <span className='contact-info' aria-label='city-name'> City: { city }</span>
            <span className='contact-info' aria-label='country'>Country: { country }</span>
            <span className='contact-info' aria-label='street-name'>Street: { street }</span>
        </div>
    </div>
  )
}

interface LocationAddressProps{
    city: string
    country: string,
    street: string
}

export default LocationAddress