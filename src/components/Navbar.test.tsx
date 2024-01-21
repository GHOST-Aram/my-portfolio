import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe('Navigation bar', () => {
    test('Renders navigation element', () =>{
        render(<Navbar />)

        const navbarElement = screen.getByRole('navigation')
        expect(navbarElement).toBeInTheDocument()
    })

    test('Renders Home nav item', () =>{
        render(<Navbar />)

        const homeNavItem = screen.getByText(/home/i)
        expect(homeNavItem).toBeInTheDocument()
    })

    test('Renders Skills nav item', () => {
        render(<Navbar/>)

        const skillsNavItem = screen.getByText(/skills/i)
        expect(skillsNavItem).toBeInTheDocument()
    })

    test('Renders projects nav item', () => {
        render(<Navbar />)

        const projectNavItem = screen.getByText(/projects/i)
        expect(projectNavItem).toBeInTheDocument()
    })

    test('Renders About nav item', () => {
        render(<Navbar />)

        const aboutNavItem = screen.getByText(/about/i)
        expect(aboutNavItem).toBeInTheDocument()
    })

    test('Renders contact nav item', () => {
        render(<Navbar />)

        const contactNavItem = screen.getByText(/contact/i)
        expect(contactNavItem).toBeInTheDocument()
    })
})