import { screen, render } from "@testing-library/react";
import HeroText from "./HeroText";

describe('Hero text', () => {

    test('Renders Hero text description', () =>{
        render(<HeroText text = "Hello its me"/>)
    
        const headingElement = screen.getByRole('heading')
        const textContent = screen.getByText(/Hello its me/)
    
        expect(headingElement).toBeInTheDocument()
        expect(textContent).toBeInTheDocument()
    })
})