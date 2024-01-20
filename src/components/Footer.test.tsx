import { screen, render } from "@testing-library/react";
import Footer from "./Footer";
import HorizontalLine from "./HorizontalLine";

describe('Page Footer', () => {
    test('Renders footer element', () => {
        render(<Footer>{<HorizontalLine />}</Footer>)

        const pageFooter = screen.getByRole('contentinfo')

        expect(pageFooter).toBeInTheDocument()
    })
})