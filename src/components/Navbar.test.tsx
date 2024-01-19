import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe('Navigation bar', () => {
    test('Renders navigation element', () =>{
        render(<Navbar />, { wrapper: BrowserRouter})

        const navbarElement = screen.getByRole('navigation')
        expect(navbarElement).toBeInTheDocument()
    })

    test('Renders Home nav item', () =>{
        render(<Navbar />, { wrapper: BrowserRouter})

        const homeNavItem = screen.getByText(/home/i)
        expect(homeNavItem).toBeInTheDocument()
    })

    test('Renders Skills nav item', () => {
        render(<Navbar/>, { wrapper: BrowserRouter})

        const skillsNavItem = screen.getByText(/skills/i)
        expect(skillsNavItem).toBeInTheDocument()
    })

    test('Renders projects nav item', () => {
        render(<Navbar />, { wrapper: BrowserRouter })

        const projectNavItem = screen.getByText(/projects/i)
        expect(projectNavItem).toBeInTheDocument()
    })

    test('Renders About nav item', () => {
        render(<Navbar />, { wrapper: BrowserRouter })

        const aboutNavItem = screen.getByText(/about/i)
        expect(aboutNavItem).toBeInTheDocument()
    })

    test('Renders contact nav item', () => {
        render(<Navbar />,{ wrapper: BrowserRouter })

        const contactNavItem = screen.getByText(/contact/i)
        expect(contactNavItem).toBeInTheDocument()
    })
})