import { screen, render } from "@testing-library/react";
import Image from "./Image";

describe('Image', () => {
    test('Renders image', () => {
        render(<Image alt = 'My image' src = 'path.pgn'/>)

        const altText = screen.getByAltText(/my image/i)
        const imageTag = screen.getByRole('img')

        expect(altText).toBeInTheDocument()
        expect(imageTag).toBeInTheDocument()
    })
})