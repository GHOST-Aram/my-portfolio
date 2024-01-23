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

    test('Renders 4 buttons', () => {
        render(<InternetMedia/>)
        
        const buttons = screen.getAllByRole('button')

        expect(buttons).toHaveLength(4)
        buttons.forEach(btn => {
            expect(btn).toBeInTheDocument()
        })
    })
 })