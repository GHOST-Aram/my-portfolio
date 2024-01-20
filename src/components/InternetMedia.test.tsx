import { screen, render } from "@testing-library/react";
import InternetMedia from "./InternetMedia";

describe('Internet Media', () => { 
    test('Display social media links', () =>{
        render(<InternetMedia/>)
        const links = screen.getAllByRole('link')

        expect(links.length).toEqual(4)
        links.forEach(link => {
            expect(link).toBeInTheDocument()
        })
    })

    test('Renders \'Twitter\', \'Github\'\'Blog\' and \'LinkedIn\'', () => {
        render(<InternetMedia />)

        const twitter = screen.getByText(/Twitter/i)
        const github = screen.getByText(/Github/i)
        const blog = screen.getByText(/technical articles/i)
        const linkedIn = screen.getByText(/LinkedIn/i)
        
        expect(twitter).toBeInTheDocument()
        expect(github).toBeInTheDocument()
        expect(blog).toBeInTheDocument()
        expect(linkedIn).toBeInTheDocument()
    })
 })