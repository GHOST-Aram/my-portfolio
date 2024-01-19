import { screen, render } from "@testing-library/react";
import SectionTitle from "./SectionTitle";

describe('Section Title', () => {
    test('Renders section title', () => {
        render(<SectionTitle text = 'Projects'/>)

        const sectionText = screen.getByText(/projects/i)
        const sectionHeading = screen.getByRole('heading')

        expect(sectionText).toBeInTheDocument()
        expect(sectionHeading).toBeInTheDocument()
    })
})