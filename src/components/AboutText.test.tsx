import { screen, render } from "@testing-library/react";
import AboutText from "./AboutText";

describe('About text', () => {
    test('Renders about text', () => {
        render(<AboutText text="About me"/>)

        const aboutText = screen.getByText(/aBOUT ME/i)
        expect(aboutText).toBeInTheDocument()
    })
})