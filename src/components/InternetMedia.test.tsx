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
 })