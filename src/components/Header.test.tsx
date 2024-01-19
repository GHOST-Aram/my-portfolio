import { screen, render } from "@testing-library/react";
import Header from "./Header";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe('Page Header', () =>{
    test('Renders page header', () => {
        render(<Header>{ <Navbar /> }</Header>, { wrapper: BrowserRouter })

        const header = screen.getByRole('banner')
        expect(header).toBeInTheDocument()
    })
})