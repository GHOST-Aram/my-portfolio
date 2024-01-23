import { screen, render } from '@testing-library/react'
import ContactLinks from './ContactLinks'

describe('Email and Phone contacts', () => {
    test('Renders email , phone and whatsapp links', () => {
        render(<ContactLinks 
                email='xyz@gmail.com' 
                phone = '09437872'
                whatsapp = '07944773'
            />
        )

        const links = screen.getAllByRole('link')

        expect(links.length).toEqual(7)
        links.forEach(link => {
            expect(link).toBeInTheDocument()
        })
    })
})