import { screen, render } from '@testing-library/react'
import EmailAndPhone from './EmailAndPhone'

describe('Email and Phone contacts', () => {
    test('Renders email , phone and whatsapp links', () => {
        render(<EmailAndPhone 
                email='xyz@gmail.com' 
                phone = '09437872'
                whatsapp = '07944773'
            />
        )

        const links = screen.getAllByRole('link')

        expect(links.length).toEqual(3)
        links.forEach(link => {
            expect(link).toBeInTheDocument()
        })
    })
})